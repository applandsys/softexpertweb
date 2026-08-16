import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import { logout } from '@/actions/auth';
import { LogOut } from 'lucide-react';

export default async function AdminDashboard() {
  let contacts: any[] = [];
  
  try {
    const filePath = path.join(process.cwd(), 'data', 'contacts.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    if (fileContent) {
      contacts = JSON.parse(fileContent);
      // Sort by date, newest first
      contacts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  } catch (error) {
    // Expected to fail if file doesn't exist yet
    console.log('No contacts data file found yet.');
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Contact Submissions</h1>
          <form action={logout}>
            <button
              type="submit"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </form>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          {contacts.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No contact submissions yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 text-sm">
                    <th className="p-4 font-semibold">Date</th>
                    <th className="p-4 font-semibold">Name</th>
                    <th className="p-4 font-semibold">Phone</th>
                    <th className="p-4 font-semibold">Email</th>
                    <th className="p-4 font-semibold">Service</th>
                    <th className="p-4 font-semibold">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {contacts.map((contact, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                        {new Date(contact.date).toLocaleString('en-US', {
                          year: 'numeric', month: 'short', day: 'numeric',
                          hour: '2-digit', minute: '2-digit'
                        })}
                      </td>
                      <td className="p-4 text-sm font-medium text-gray-900">{contact.name}</td>
                      <td className="p-4 text-sm text-gray-600">{contact.phone}</td>
                      <td className="p-4 text-sm text-gray-600">
                        <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                          {contact.email}
                        </a>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {contact.service}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-600 max-w-xs truncate" title={contact.message}>
                        {contact.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
