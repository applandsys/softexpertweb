'use client';

import React, { useActionState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { submitContact } from '@/actions/contact';

const initialState = {
  success: false,
  message: '',
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      {state.message && (
        <div className={`p-4 rounded ${state.success ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'} border`}>
          {state.message}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input type="text" name="name" placeholder="আপনার নাম" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" />
        </div>
        <div>
          <input type="tel" name="phone" placeholder="আপনার মোবাইল নাম্বার" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input type="email" name="email" placeholder="আপনার ইমেইল এড্রেস" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" />
        </div>
        <div>
          <select name="service" defaultValue="" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors bg-white text-gray-700">
            <option value="" disabled>আপনি কোন সেবাটি নিতে চাচ্ছেন?</option>
            <option value="ল্যান্ডিং পেজ সার্ভিস">ল্যান্ডিং পেজ সার্ভিস</option>
            <option value="ভিডিও এডিটিং">ভিডিও এডিটিং</option>
            <option value="ডিজিটাল মার্কেটিং">ডিজিটাল মার্কেটিং</option>
            <option value="গ্রাফিক্স ডিজাইন">গ্রাফিক্স ডিজাইন</option>
            <option value="সার্চ ইঞ্জিন অপটিমাইজেশন">সার্চ ইঞ্জিন অপটিমাইজেশন</option>
            <option value="ডোমেইন ও হোস্টিং">ডোমেইন ও হোস্টিং</option>
            <option value="ওয়েবসাইট ডিজাইন এন্ড ডেভেলপমেন্ট">ওয়েবসাইট ডিজাইন এন্ড ডেভেলপমেন্ট</option>
            <option value="সফটওয়্যার ডেভেলপমেন্ট">সফটওয়্যার ডেভেলপমেন্ট</option>
          </select>
        </div>
      </div>
      <div>
        <textarea name="message" rows={6} placeholder="আপনার মেসেজ" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-none"></textarea>
      </div>
      <div>
        <button type="submit" disabled={isPending} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
          <Send size={20} />
          {isPending ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
        </button>
      </div>
    </form>
  );
}
