import React from "react";

const PrivacyPolicyAr = () => {
  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          سياسة الخصوصية
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          في موقع <span className="font-semibold">Seretak</span> نحترم خصوصية زوارنا بشكل كامل،
          ونلتزم بحمايتها وعدم جمع أو مشاركة أي بيانات شخصية. تصف سياسة الخصوصية هذه كيفية
          تعاملنا مع المعلومات (في حال وجودها مستقبلاً)، وما هي الضمانات التي نقدمها للمستخدمين
          للحفاظ على تجربة آمنة وسلسة.
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              ١. عدم جمع البيانات
            </h2>
            <p className="text-gray-700 leading-relaxed">
              نؤكد لزوار موقع <span className="font-semibold">Seretak</span> أننا لا نقوم بجمع
              أي بيانات شخصية مثل الأسماء، عناوين البريد الإلكتروني، أو أرقام الهواتف. يمكنكم
              استخدام خدماتنا بأمان وراحة بال، دون الحاجة إلى مشاركة أي بيانات تخصكم.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              ٢. استخدام الموقع
            </h2>
            <p className="text-gray-700 leading-relaxed">
              يهدف موقع <span className="font-semibold">Seretak</span> إلى تقديم خدماته بطريقة
              مباشرة وسهلة الاستخدام، دون الحاجة إلى تسجيل أو إنشاء حساب. جميع الأدوات
              والخصائص متاحة للاستعمال الحر، وبالتالي لا يتم تخزين أي بيانات تخص أنشطة الزوار.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              ٣. ملفات تعريف الارتباط (Cookies)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              حالياً، لا يستخدم موقع <span className="font-semibold">Seretak</span> أي ملفات
              تعريف ارتباط (Cookies) لتتبع أو تخزين بيانات المستخدمين. وفي حال قررنا استخدام
              هذه الملفات مستقبلاً بهدف تحسين تجربة الاستخدام فقط، سيتم توضيح ذلك بشكل كامل
              وتحديث سياسة الخصوصية وفقاً لذلك.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              ٤. مشاركة البيانات مع أطراف ثالثة
            </h2>
            <p className="text-gray-700 leading-relaxed">
              لا يقوم موقع <span className="font-semibold">Seretak</span> بمشاركة أي بيانات مع
              أطراف خارجية، سواء كانت شركات إعلانية، شركاء خدمات، أو أي جهة أخرى. نحن ملتزمون
              بحماية زوارنا من أي شكل من أشكال الاستغلال الرقمي.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              ٥. تحديث سياسة الخصوصية
            </h2>
            <p className="text-gray-700 leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتتماشى مع أي تغييرات جديدة في
              خدماتنا أو في القوانين المنظمة لحماية البيانات. سنقوم بنشر أي تعديلات على هذه
              الصفحة ليكون جميع الزوار على علم بها.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 leading-relaxed font-medium">
            باستخدامك لموقع <span className="font-semibold">Seretak</span>، فإنك توافق على سياسة
            الخصوصية هذه. نحن نعدك دائماً بأن خصوصيتك أولوية بالنسبة لنا، وأن تجربتك معنا ستكون
            آمنة وخالية من أي مخاطر تتعلق ببياناتك الشخصية.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyAr;
