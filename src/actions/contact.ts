'use server'

import fs from 'fs/promises';
import path from 'path';

export async function submitContact(prevState: any, formData: FormData) {
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        service: formData.get('service'),
        message: formData.get('message'),
        date: new Date().toISOString()
    };

    const filePath = path.join(process.cwd(), 'data', 'contacts.json');
    
    try {
        // Ensure data directory exists
        const dirPath = path.join(process.cwd(), 'data');
        try {
            await fs.access(dirPath);
        } catch {
            await fs.mkdir(dirPath, { recursive: true });
        }

        let contacts = [];
        try {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            if (fileContent) {
                contacts = JSON.parse(fileContent);
            }
        } catch (error) {
            // File might not exist or be empty/invalid JSON, start fresh array
        }

        contacts.push(data);
        await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));

        return { success: true, message: 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে! (Your message has been sent successfully!)' };
    } catch (error) {
        console.error('Error saving contact data:', error);
        return { success: false, message: 'বার্তা পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন। (Failed to send message.)' };
    }
}
