export default function ReturnRefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">سياسة الاسترجاع والاسترداد</h1>
      <p className="mb-4">
        نرحب بكم في <span className="font-semibold">سيرتك</span>. نحن نحرص على رضاكم التام عند استخدام خدماتنا. 
        توضح هذه السياسة شروط وإجراءات الاسترجاع والاسترداد الخاصة بنا.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">١. عدم وجود منتجات مادية</h2>
      <p className="mb-4">
        بما أن <span className="font-semibold">سيرتك</span> يقدم خدمة رقمية (منشئ السيرة الذاتية عبر الإنترنت)، 
        فإننا لا نقوم ببيع منتجات مادية يمكن استرجاعها أو استردادها.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">٢. حالات الاسترداد</h2>
      <p className="mb-4">
        نحن نسعى لضمان تجربة استخدام سلسة وخالية من المشاكل. 
        ومع ذلك، قد يتم النظر في الاسترداد فقط في الحالات التالية:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>وجود خطأ تقني يمنع المستخدم من إنشاء أو تنزيل سيرته الذاتية.</li>
        <li>خصم رسوم مكررة بطريق الخطأ من حساب المستخدم.</li>
        <li>أي خلل في الدفع الإلكتروني نتج عنه خسارة مالية للمستخدم دون استفادته من الخدمة.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">٣. كيفية طلب الاسترداد</h2>
      <p className="mb-4">
        في حال واجهت مشكلة تستدعي طلب استرداد، يمكنك تقديم طلب عبر البريد الإلكتروني 
        المخصص للدعم، موضحًا تفاصيل المشكلة ورقم العملية المالية، وسيتم مراجعة الطلب 
        في غضون <span className="font-semibold">٧ أيام عمل</span>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">٤. الاستثناءات</h2>
      <p className="mb-4">
        لا يمكن استرداد المبالغ في الحالات التالية:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>استخدام الخدمة بشكل كامل بعد الدفع (تحميل السيرة الذاتية أو إنشائها بنجاح).</li>
        <li>المشاكل الناتجة عن سوء استخدام من جانب المستخدم.</li>
        <li>المطالبات المقدمة بعد مرور أكثر من ١٤ يومًا من تاريخ العملية المالية.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">٥. التعديلات على السياسة</h2>
      <p className="mb-4">
        قد نقوم بتحديث أو تعديل سياسة الاسترجاع والاسترداد من وقت لآخر، وسيتم نشر 
        أي تغييرات على هذه الصفحة بشكل واضح.
      </p>

      <p className="mt-8 text-center font-medium">
        شكراً لاستخدامكم <span className="font-semibold">سيرتك</span>. رضاكم هو أولويتنا.
      </p>
    </div>
  );
}
