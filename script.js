// تحديد العناصر
const main = document.querySelector(".main");
const closeBtn = document.querySelector(".close");
console.log(closeBtn);
// إضافة تفاعلية عند النقر على الزر
main.addEventListener("click", () => {
  main.classList.toggle("active");
});

// إغلاق القائمة عند النقر على زر الإغلاق
closeBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // منع الحدث من الانتشار إلى العنصر الرئيسي
  main.classList.remove("active");
});
