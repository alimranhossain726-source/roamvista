RoamVista Starter — বাংলা নির্দেশনা

এই প্যাকেজে আছে:
- index.html: হোমপেজ
- styles.css: ডিজাইন ও মোবাইল রেসপনসিভ স্টাইল
- script.js: মোবাইল মেনু ও ছোট ইন্টারঅ্যাকশন
- robots.txt এবং sitemap.xml: প্রাথমিক SEO ফাইল

গুরুত্বপূর্ণ:
1) এটি প্রথম ধাপের স্ট্যাটিক ওয়েবসাইট। এখানে এখনো নিরাপদ অ্যাডমিন লগইন, ডেটাবেস, পোস্ট প্রকাশ/সম্পাদনা, ইমেজ আপলোড বা বিজ্ঞাপন কোড পরিচালনার ব্যাকএন্ড নেই।
2) হোমপেজে থাকা কিছু আর্টিকেল কার্ড ডিজাইন নমুনা। প্রকাশের আগে তথ্য যাচাই করে মৌলিক কনটেন্ট লিখে নিন।
3) index.html-এ https://YOUR-PROJECT.pages.dev/ থাকা URL আপনার আসল Cloudflare Pages URL দিয়ে বদলান। robots.txt এবং sitemap.xml-এও বদলান।
4) ছবিগুলো বাহ্যিক Unsplash URL থেকে আসে, তাই ইন্টারনেট দরকার। পরে নিজের/লাইসেন্সযুক্ত ছবি ব্যবহার করা ভালো।
5) নিউজলেটার ফর্ম এখনো ইমেইল সংগ্রহ করে না; এটি শুধু নমুনা।

Android মোবাইল দিয়ে Cloudflare Pages-এ প্রকাশ:
A. GitHub-এ লগইন করে https://github.com/new খুলুন।
B. Repository name দিন: roamvista
C. Public বা Private যেকোনোটি বেছে Create repository করুন।
D. Add file > Create new file দিয়ে index.html তৈরি করুন, এই ZIP-এর index.html-এর সব কোড কপি করে পেস্ট করুন, Commit changes করুন।
E. একইভাবে styles.css, script.js, robots.txt ও sitemap.xml তৈরি করে প্রত্যেক ফাইলের কোড কপি-পেস্ট ও Commit করুন।
F. https://dash.cloudflare.com/ খুলুন।
G. Workers & Pages > Create application > Pages > Connect to Git নির্বাচন করুন।
H. GitHub সংযুক্ত করে roamvista repository বেছে নিন।
I. Production branch: main
J. Build command: exit 0
K. Build output directory: / (root) বা . (Cloudflare UI যেটি গ্রহণ করে)
L. Save and Deploy করুন।
M. Deploy শেষ হলে পাওয়া *.pages.dev ঠিকানা খুলুন।

নোট: Cloudflare UI-তে অপশন সামান্য বদলাতে পারে। Git integration ব্যবহার করলে পরবর্তীতে GitHub-এ Commit করলেই সাইট আপডেট হতে পারে।

পরবর্তী ধাপ:
- Workers/D1 দিয়ে নিরাপদ admin backend
- Admin login ও post CRUD
- image upload/storage
- SEO metadata per article
- Ad slots/settings
- Privacy, About, Contact ও Affiliate Disclosure পেজ
