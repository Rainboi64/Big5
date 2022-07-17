//
//  Reserved for needing to edit the questions in the future,
//  Yes! this was written painstakingly manually on a linux desktop
//  that doesn't support arabic.
//
//  this is a call for help!
//

import { Question } from "./Types/Question";

// Question Template for copying and pasting
// {
//     Category: "",
//     Polarity: "Positive",
//     Text: ""
// },

export const Questions: Question[] = [
  // Neurocitism
  // Anxiety
  {
    Category: "Anxiety",
    Polarity: "Positive",
    Text: "أنا أقلق وأتوتر حيال الأمور",
  },
  {
    Category: "Anxiety",
    Polarity: "Positive",
    Text: "أنا أخاف من حدوث الأسوأ",
  },
  {
    Category: "Anxiety",
    Polarity: "Positive",
    Text: "أنا أخاف من العديد من الأشياء",
  },
  {
    Category: "Anxiety",
    Polarity: "Positive",
    Text: "أتوتر بسرعة وبسهولة",
  },

  // Anger

  {
    Category: "Anger",
    Polarity: "Positive",
    Text: "أنا أغضب بسرعة وبسهولة",
  },
  {
    Category: "Anger",
    Polarity: "Positive",
    Text: "يسهل إزعاجي",
  },
  {
    Category: "Anger",
    Polarity: "Positive",
    Text: "أغضب وأفقد أعصابي",
  },
  {
    Category: "Anger",
    Polarity: "Negative",
    Text: "نادراً ما أنزعج",
  },

  // Depression

  {
    Category: "Depression",
    Polarity: "Positive",
    Text: "أشعر بالإكتئاب معظم الأحيان",
  },
  {
    Category: "Depression",
    Polarity: "Positive",
    Text: "لا أحب نفسي",
  },
  {
    Category: "Depression",
    Polarity: "Positive",
    Text: "غالباً ما أكون حزيناً",
  },
  {
    Category: "Depression",
    Polarity: "Positive",
    Text: "لا أشعر بالثقة بالنفس",
  },

  // Self Consciousness

  {
    Category: "Self Consciousness",
    Polarity: "Positive",
    Text: "أواجه صعوبات في التواصل مع الآخرين",
  },
  {
    Category: "Self Consciousness",
    Polarity: "Positive",
    Text: "يسهل إخافتي",
  },
  {
    Category: "Self Consciousness",
    Polarity: "Negative",
    Text: "ليس من السهل إحراجي",
  },
  {
    Category: "Self Consciousness",
    Polarity: "Negative",
    Text: "أواجه صعوبات في التواصل مع الآخرين",
  },

  // Immoderation

  {
    Category: "Immoderation",
    Polarity: "Positive",
    Text: "غالباً ما آكل كثيراً",
  },
  {
    Category: "Immoderation",
    Polarity: "Positive",
    Text: "أنغمس في الأمر بشكل مفرط",
  },
  {
    Category: "Immoderation",
    Polarity: "Negative",
    Text: "أنا بعيد عن الإفراط (نادراً ما أفرط في الأمور)",
  },
  {
    Category: "Immoderation",
    Polarity: "Negative",
    Text: "لدي القدرة على ضبط نفسي ورغباتي",
  },

  // Vulnerability

  {
    Category: "Vulnerability",
    Polarity: "Positive",
    Text: "أشعر بعدم قدرتي على التعامل مع الأمور",
  },
  {
    Category: "Vulnerability",
    Polarity: "Negative",
    Text: "أعرف كيف أتفاعل وأتعامل مع الآخرين أو مع المواقف المختلفة",
  },
  {
    Category: "Vulnerability",
    Polarity: "Negative",
    Text: "أنا هادئ بطبعي لاسيما في المواقف الحساسة",
  },
  {
    Category: "Vulnerability",
    Polarity: "Negative",
    Text: "أظبط أعصابي وأحافظ على هدوئي وأنا تحت الضغط",
  },

  // Extraversion
  // Friendliness

  {
    Category: "Friendliness",
    Polarity: "Positive",
    Text: "من السهل علي تكوين الصداقات",
  },
  {
    Category: "Friendliness",
    Polarity: "Positive",
    Text: "أنسجم مع الآخرين بسرعة",
  },
  {
    Category: "Friendliness",
    Polarity: "Positive",
    Text: "أشعر بالراحة وسط الآخرين",
  },
  {
    Category: "Friendliness",
    Polarity: "Positive",
    Text: "أتفاعل وأتصرف بطبيعتي وبأريحية وأنا وسط الآخرين",
  },

  // Gregariousness

  {
    Category: "Gregariousness",
    Polarity: "Positive",
    Text: "أحب الاحتفالات والتجمعات الكبيرة",
  },
  {
    Category: "Gregariousness",
    Polarity: "Positive",
    Text: "أتحدث وأتعرف على أشخاص مختلفين كُثر في الحفلات والتجمعات ",
  },
  {
    Category: "Gregariousness",
    Polarity: "Negative",
    Text: "لا أحب التجمعات والحشود",
  },
  {
    Category: "Gregariousness",
    Polarity: "Negative",
    Text: "أتحاشى التجمعات والحشود",
  },

  // Assertiveness

  {
    Category: "Assertiveness",
    Polarity: "Positive",
    Text: "أنا أتحمل المسؤولية",
  },
  {
    Category: "Assertiveness",
    Polarity: "Positive",
    Text: "أحاول السيطرة والقيادة",
  },
  {
    Category: "Assertiveness",
    Polarity: "Positive",
    Text: "أمسك بزمام الأمور وأسيطر عليها",
  },
  {
    Category: "Assertiveness",
    Polarity: "Negative",
    Text: "أنتظر الآخرين ليقوموا بإدارة وقيادة الموقف",
  },

  // Activity Level

  {
    Category: "Activity Level",
    Polarity: "Positive",
    Text: "أنا مفعم بالفرح والبهجة",
  },
  {
    Category: "Activity Level",
    Polarity: "Positive",
    Text: "أستمتع كثيراً",
  },
  {
    Category: "Activity Level",
    Polarity: "Positive",
    Text: "مقبل على الحياة / أحب الحياة",
  },
  {
    Category: "Activity Level",
    Polarity: "Positive",
    Text: "أضحك من قلبي وبصوت عالي ",
  },

  // Excitement Seeking

  {
    Category: "Excitement Seeking",
    Polarity: "Positive",
    Text: "أحب التشويق والإثارة",
  },
  {
    Category: "Excitement Seeking",
    Polarity: "Positive",
    Text: "أبحث عن المغامرة",
  },
  {
    Category: "Excitement Seeking",
    Polarity: "Positive",
    Text: "أعشق المغامرات",
  },
  {
    Category: "Excitement Seeking",
    Polarity: "Positive",
    Text: "أضحك من قلبي وبصوت عالي ",
  },

  // Cheerfulness
  {
    Category: "Cheerfulness",
    Polarity: "Positive",
    Text: "أنا مفعم بالفرح والبهجة",
  },
  {
    Category: "Cheerfulness",
    Polarity: "Positive",
    Text: "أستمتع كثيراً",
  },
  {
    Category: "Cheerfulness",
    Polarity: "Positive",
    Text: "مقبل على الحياة / أحب الحياة",
  },
  {
    Category: "Cheerfulness",
    Polarity: "Positive",
    Text: "أضحك  من قلبي وبصوت عالي",
  },

  // Openness
  // Imagination

  {
    Category: "Imagination",
    Polarity: "Positive",
    Text: "لدي مخيلة خصبة وواسعة",
  },
  {
    Category: "Imagination",
    Polarity: "Positive",
    Text: "اسمتع بخيالي الخصب الحالم",
  },
  {
    Category: "Imagination",
    Polarity: "Positive",
    Text: "أحب أنا أعيش أحلام اليقظة",
  },
  {
    Category: "Imagination",
    Polarity: "Positive",
    Text: "أحب أن أسرح بخيالي",
  },

  // Artistic Interests

  {
    Category: "Artistic Interests",
    Polarity: "Positive",
    Text: "أرى الجمال في الأشياء التي من الممكن أن يغفل عنها الآخرون",
  },
  {
    Category: "Artistic Interests",
    Polarity: "Negative",
    Text: "لا أحب الفن",
  },
  {
    Category: "Artistic Interests",
    Polarity: "Negative",
    Text: "لا يستهويني الشعر",
  },
  {
    Category: "Artistic Interests",
    Polarity: "Negative",
    Text: "لا أستمتع بزيارة المتاحف الفنية",
  },

  // Emotionality

  {
    Category: "Emotionality",
    Polarity: "Positive",
    Text: "أنا أستغرق وأعيش في مشاعري",
  },
  {
    Category: "Emotionality",
    Polarity: "Negative",
    Text: "نادراً ما أميل لأكون عاطفي",
  },
  {
    Category: "Emotionality",
    Polarity: "Negative",
    Text: "ليس من السهل أن تحكمني عواطفي",
  },
  {
    Category: "Emotionality",
    Polarity: "Negative",
    Text: "أنا قليل الانفعال فمن النادر ما أكون في قمة انفعالي أو بروده",
  },

  // Adventurousness

  {
    Category: "Adventurousness",
    Polarity: "Negative",
    Text: "أفضل أن أقوم بالأعمال التي أعرفها",
  },
  {
    Category: "Adventurousness",
    Polarity: "Negative",
    Text: "لا أفضل التغيير",
  },
  {
    Category: "Adventurousness",
    Polarity: "Negative",
    Text: "لا تروق لي فكرة التغيير",
  },
  {
    Category: "Adventurousness",
    Polarity: "Negative",
    Text: "أنا إنسان تقليدي لأبعد الحدود",
  },

  // Intellect

  {
    Category: "Intellect",
    Polarity: "Negative",
    Text: "لا تروق لي الأفكار المجردة",
  },
  {
    Category: "Intellect",
    Polarity: "Negative",
    Text: "أتفادى القاشات الفلسفية",
  },
  {
    Category: "Intellect",
    Polarity: "Negative",
    Text: "أجد صعوبة في استيعاب الأفكار المجردة",
  },
  {
    Category: "Intellect",
    Polarity: "Negative",
    Text: "لا أحب النقاشات النظرية - غير العملية",
  },

  // Liberalism

  {
    Category: "Liberalism",
    Polarity: "Positive",
    Text: "أحبذ التصويت لصالح المرشحين الليبراليين التحرريين",
  },
  {
    Category: "Liberalism",
    Polarity: "Negative",
    Text: "أنا شخص أؤمن بأحادية الدين والعقيدة",
  },
  {
    Category: "Liberalism",
    Polarity: "Negative",
    Text: "أميل للتصويت لصالح المرشحين السياسيين المحافظين",
  },
  {
    Category: "Liberalism",
    Polarity: "Positive",
    Text: "أحترم النشيد الوطني وأحب الوقوف أثناء تأدية السلام الوطني",
  },

  // Agreeableness
  // Sympathy
  {
    Category: "Sympathy",
    Polarity: "Positive",
    Text: "أتعاطف مع المشردين",
  },
  {
    Category: "Sympathy",
    Polarity: "Positive",
    Text: "أتعاطف مع الأشخاص الأسوأ حالاً مني",
  },
  {
    Category: "Sympathy",
    Polarity: "Positive",
    Text: "أستاء وأشفق وأتعاطف لتعاسة الآخرين  ومعاناتهم",
  },
  {
    Category: "Sympathy",
    Polarity: "Negative",
    Text: "لا أكترث لمعاناة ومشاكل الآخرين",
  },

  // Trust

  {
    Category: "Trust",
    Polarity: "Positive",
    Text: "أثق بالآخرين",
  },
  {
    Category: "Trust",
    Polarity: "Positive",
    Text: "أؤمن بحسن نوايا الآخرين",
  },
  {
    Category: "Trust",
    Polarity: "Positive",
    Text: "أصدق ما يقوله الآخرون",
  },
  {
    Category: "Trust",
    Polarity: "Negative",
    Text: "لا أثق بالآخرين",
  },

  // Morality

  {
    Category: "Morality",
    Polarity: "Negative",
    Text: "أتجمل وأعتمد على الإطراءات من أجل الوصول إلى ما أريده",
  },
  {
    Category: "Morality",
    Polarity: "Negative",
    Text: "أعرف كيفية التحايل على القوانين والأعراف",
  },
  {
    Category: "Morality",
    Polarity: "Negative",
    Text: "قد أغش من أجل الوصول إلى ما أريد",
  },
  {
    Category: "Morality",
    Polarity: "Negative",
    Text: "قد أستغل الآخرين من أجل مصالحي الشخصية",
  },

  // Altruism

  {
    Category: "Altruism",
    Polarity: "Positive",
    Text: "أحب أن أجعل الآخرين يشعرون بالترحيب وبالقبول من طرفي",
  },
  {
    Category: "Altruism",
    Polarity: "Positive",
    Text: "أحب مساعدة الآخرين",
  },
  {
    Category: "Altruism",
    Polarity: "Positive",
    Text: "أهتم بأمور الآخرين",
  },
  {
    Category: "Altruism",
    Polarity: "Positive",
    Text: "أستبعد الآخرين وأتجاهلهم وقد أخذلهم وأتخلى عنهم",
  },

  // Cooperation

  {
    Category: "Cooperation",
    Polarity: "Negative",
    Text: "أحب القيام بأفضل ما لدي والتصرف بطريقة فاضلة وأخلاقية",
  },
  {
    Category: "Cooperation",
    Polarity: "Negative",
    Text: "أتذمر في وجه الآخرين",
  },
  {
    Category: "Cooperation",
    Polarity: "Negative",
    Text: "أهبن الآخرين، أؤذيهم وأقلل من شأنهم",
  },
  {
    Category: "Cooperation",
    Polarity: "Negative",
    Text: "أنتقم من الآخرين على إيذائهم لي",
  },

  // Modesty

  {
    Category: "Modesty",
    Polarity: "Positive",
    Text: "أتعاطف مع المشردين",
  },
  {
    Category: "Modesty",
    Polarity: "Positive",
    Text: "أتعاطف مع الأشخاص الأسوأ حالاً مني ",
  },
  {
    Category: "Modesty",
    Polarity: "Positive",
    Text: "أستاء وأشفق وأتعاطف لتعاسة الآخرين ومعاناتهم",
  },
  {
    Category: "Modesty",
    Polarity: "Negative",
    Text: "لا أكترث لمعاناة ومشاكل الآخرين",
  },

  // Conscientiousness
  // Self Efficacy

  {
    Category: "Self Efficacy",
    Polarity: "Positive",
    Text: "أقوم بمهامي على أكمل وجه",
  },
  {
    Category: "Self Efficacy",
    Polarity: "Positive",
    Text: "أنا أتميز بكل شي أقوم به",
  },
  {
    Category: "Self Efficacy",
    Polarity: "Positive",
    Text: "أنا قادر على إدارة الأمور بشكل سلس وجيد",
  },
  {
    Category: "Self Efficacy",
    Polarity: "Positive",
    Text: "أجيد التصرف وأعرف كيف تتم الأمور وكيف تُدار",
  },

  // Orderliness

  {
    Category: "Orderliness",
    Polarity: "Positive",
    Text: "أحب النظام والترتيب",
  },
  {
    Category: "Orderliness",
    Polarity: "Positive",
    Text: "أحب أن أرتب وأنظم الأمور من حولي",
  },
  {
    Category: "Orderliness",
    Polarity: "Negative",
    Text: "غرفتي غير مرتبة وغير منظمة (فوضى)",
  },
  {
    Category: "Orderliness",
    Polarity: "Negative",
    Text: "أترك أغراضي مبعثرة هنا وهناك ",
  },

  // Dutifulness

  {
    Category: "Dutifulness",
    Polarity: "Positive",
    Text: "أنا ألتزم بوعودي",
  },
  {
    Category: "Dutifulness",
    Polarity: "Positive",
    Text: "أنا أقول الحقيقة",
  },
  {
    Category: "Dutifulness",
    Polarity: "Negative",
    Text: "أنا أنقض عهودي",
  },
  {
    Category: "Dutifulness",
    Polarity: "Negative",
    Text: "أجعل الآخرين يقومون بفرائضي وواجباتي",
  },

  // Achievement Striving

  {
    Category: "Achievement Striving",
    Polarity: "Positive",
    Text: "أنا أعمل بجد واجتهاد",
  },
  {
    Category: "Achievement Striving",
    Polarity: "Positive",
    Text: "أقوم بأكثر مما هو متوقع مني",
  },
  {
    Category: "Achievement Striving",
    Polarity: "Positive",
    Text: "أضع معييراً عالية لنفسي وللآخرين",
  },
  {
    Category: "Achievement Striving",
    Polarity: "Negative",
    Text: "لا أكترث كثيراً بالنجاح",
  },

  // Self Discipline

  {
    Category: "Self Discipline",
    Polarity: "Positive",
    Text: "أقوم بمهامي على الفور",
  },
  {
    Category: "Self Discipline",
    Polarity: "Negative",
    Text: "أستصعب الالتزام بالعمل وأجد صعوبة في البدء بالعمل",
  },
  {
    Category: "Self Discipline",
    Polarity: "Negative",
    Text: "أحتاج إلى التشجيع والدفع من الآخرين كي أقوم بالعمل",
  },
  {
    Category: "Self Discipline",
    Polarity: "Negative",
    Text: "أستصعب القيام بالمهام الموكلة إلي",
  },

  // Cautiousness

  {
    Category: "Cautiousness",
    Polarity: "Negative",
    Text: "أسرع إلى العمل بدون تفكير مسبق",
  },
  {
    Category: "Cautiousness",
    Polarity: "Negative",
    Text: "أتسرع بصنع واتخاذ القرارات",
  },
  {
    Category: "Cautiousness",
    Polarity: "Negative",
    Text: "أندفع نحو الأمر بدون تفكير مسبق",
  },
  {
    Category: "Cautiousness",
    Polarity: "Negative",
    Text: "أتصرف بدون تفكير مسبق",
  },
];
