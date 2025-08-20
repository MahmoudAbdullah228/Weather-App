# Weather App

## فكرة المشروع
تطبيق ويب بسيط يعرض حالة الطقس الحالية لمدينة يحددها المستخدم. يعتمد التطبيق على واجهة استخدام سهلة وبسيطة تتيح البحث عن المدينة وعرض معلومات الطقس مثل درجة الحرارة، الرطوبة، سرعة الرياح، وأيقونة تمثل حالة الطقس.

## الهيكل العام للمشروع
```
Weather App/
│
├── index.html         # الصفحة الرئيسية للتطبيق
├── style.css          # تنسيقات وتصميم واجهة المستخدم
├── script.js          # منطق جلب بيانات الطقس والتفاعل مع المستخدم
├── images/            # أيقونات وصور الطقس
│   ├── clear.png
│   ├── clouds.png
│   ├── drizzle.png
│   ├── humidity.png
│   ├── mist.png
│   ├── rain.png
│   ├── search.png
│   ├── snow.png
│   └── wind.png
└── README.md          # ملف الشرح والتوثيق
```

## شرح الملفات
- **index.html**: يحتوي على هيكل الصفحة وعناصر واجهة المستخدم.
- **style.css**: مسؤول عن تنسيق وتصميم واجهة التطبيق.
- **script.js**: يحتوي على كود جلب بيانات الطقس من API وتحديث الواجهة.
- **images/**: مجلد يحتوي على أيقونات وصور تمثل حالات الطقس المختلفة.

## كيفية الاستخدام
1. افتح التطبيق في المتصفح.
2. اكتب اسم المدينة في مربع البحث واضغط على زر البحث.
3. ستظهر لك حالة الطقس الحالية للمدينة التي أدخلتها.

## ملاحظات
- يجب توفر اتصال بالإنترنت لجلب بيانات الطقس.
- يمكن تعديل التصميم أو إضافة ميزات بسهولة من خلال الملفات المنظمة.
## Weather App

This is a simple and modern Weather App built with HTML, CSS, and JavaScript. The app allows users to search for any city and instantly view the current weather conditions, including temperature, humidity, and wind speed, with relevant weather icons.

### Project Structure

```
Weather App/
│
├── index.html         # Main HTML file
├── style.css          # Styling for the app
├── script.js          # JavaScript logic for fetching and displaying weather
├── README.md          # Project documentation
└── images/            # Weather and UI icons
	├── clear.png
	├── clouds.png
	├── drizzle.png
	├── humidity.png
	├── mist.png
	├── rain.png
	├── search.png
	├── snow.png
	└── wind.png
```

### Project Idea

The Weather App provides real-time weather information for any city entered by the user. It fetches data from a weather API and displays:

- Weather icon based on current conditions
- Temperature in Celsius
- City name
- Humidity percentage
- Wind speed

The app features a clean and responsive UI, making it easy to use on both desktop and mobile devices.

---

**How to Use:**
1. Enter a city name in the search bar.
2. Click the search button or press Enter.
3. View the current weather details for the selected city.

---

**Author:** Mahmoud Abdullah
**Repository:** [Weather-App](https://github.com/MahmoudAbdullah228/Weather-App)
