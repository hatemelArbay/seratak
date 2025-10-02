export default function CancellationPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">سياسة الإلغاء</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">١. مقدمة</h2>
        <p>
          نحن في <span className="font-bold">Seretak</span> نسعى لتقديم تجربة مميزة 
          لعملائنا، وندرك أنه قد تطرأ ظروف تستدعي إلغاء الطلب أو الخدمة. تهدف هذه 
          السياسة إلى توضيح الشروط والإجراءات المتعلقة بعمليات الإلغاء.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">٢. شروط الإلغاء</h2>
        <p>
          يحق للعميل طلب إلغاء الطلب خلال فترة زمنية محددة من وقت إتمام الطلب، 
          بشرط ألا يكون قد بدأ تنفيذ الخدمة أو شحن المنتج. 
        </p>
        <p>
          في حالة بدء التنفيذ، قد يتم خصم جزء من المبلغ لتغطية التكاليف الفعلية 
          التي تم صرفها.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">٣. طريقة الإلغاء</h2>
        <p>
          يمكن للعميل تقديم طلب الإلغاء عبر لوحة التحكم في الموقع أو من خلال 
          التواصل مع فريق الدعم. سيتم مراجعة الطلب والرد خلال مدة أقصاها ٤٨ ساعة.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">٤. استرداد المبالغ بعد الإلغاء</h2>
        <p>
          في حال الموافقة على الإلغاء، يتم استرداد المبلغ المدفوع – كلياً أو جزئياً 
          – وفقاً للشروط الموضحة أعلاه. يتم التحويل بنفس وسيلة الدفع التي تم 
          استخدامها خلال مدة تتراوح بين ٧ إلى ١٤ يوم عمل.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">٥. استثناءات</h2>
        <p>
          بعض الخدمات أو المنتجات قد لا تكون قابلة للإلغاء بعد تأكيد الطلب، 
          مثل المنتجات الرقمية أو العروض الخاصة. سيتم توضيح ذلك عند عملية الشراء.
        </p>
      </section>

      <footer className="mt-10 text-center text-sm text-gray-600">
        آخر تحديث: {new Date().toLocaleDateString("ar-EG")}
      </footer>
    </div>
  );
}
