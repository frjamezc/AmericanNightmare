$(document).ready(function() {
  var win = $(window);

  // Each time the user scrolls
  win.scroll(function() {
    // End of the document reached?
    if ($(document).height() - win.height() == win.scrollTop()) {

      $('html, body').animate({
        scrollTop: $(".row").offset().top
      },400);
    }
  });
});

$(".raqqa").prop("title",'US/Russian led airstrikes killing 150 civilians in Raqqa in March of 2017. 5x the casualties acknowledged by the Pentagon. The U.S. joined the fight against ISIS in 2014.');
$(".mosul").prop("title","In 2016, the deadliest US-led coalition airstrike since 2003 occurred in Mosul, Iraq. At least 500 civilians were killed.");
$(".obama").prop("title","In 2010, President Obama ordered the CIA to kill Anwar al-Awlaki, an American citizen. Anwar al-Awlaki had been investigated by the FBI for possible ties to the Sept 11, 2001 attacks. After multiple interviews al-Awlaki had no connection to al-Qaeda. After two weeks of killing Anwar al-Awlaki a drone strike killed his 16-year-old son Abdulrahman al-Awlaki who was a US citizen. In 2017, President Trump ordered the raid on Yakla  Nawar al-Awlaki, an eight-year-old was killed.");
$(".dakota").prop("title","President Donald Trump, who held between $15k-$50k in Energy Transfer Partners (the company that planned the Pipeline), signed a memo to approve Pipeline construction. Indigenous peoples protested on the construction on their sacred land. Environmentalists protested to stop future oil spills.");
$(".abu").prop("title","Abu Ghraib prison was a United States Army detention center known for caputuring Iraqis from 2003 to 2006. An investigation of the prison and the treatment of detainees was opened by graphic photos of the abuse detainees in 2003. In 2003 the Abu Ghraib held 3, 8000 detainees and lived in tents and prison yards. The torture and abuse was held inside a prison block 1A and 1B. The investigation convicted eleven US soldiers but also not all service members were charged but  reprimanded.");
$(".amir").prop("title",'The Amiriyah shelter bombing was an aerial attack that killed at least 408 civilians on 13 February 1991 during the Persian Gulf War, when an air-raid shelter in the Amiriyah neighborhood of Baghdad, Iraq, was destroyed by the U.S. Air Force with two laser-guided "smart bombs".');
$(".fall").prop("title","On the evening of April 28, 2003, United States Army soldiers fired into a crowd of Iraqi civilians who were protesting their presence at a school within the city of Fallujah. The soldiers claimed they were receiving fire from the crowd, whereas the civilians said they were shot at first. According to locals, at this point the United States soldiers fired upon the unarmed crowd, killing 17 and wounding more than 70 of the protesters. The U.S. suffered no casualties from the incident. Human Rights Watch, which inspected the area after the incident, found no physical evidence of shots fired at the building where U.S. forces were based. On the same day three more unarmed civilians were killed by United States soldiers during a daytime protest in front of the Ba'ath party headquarters and mayor's office.");
$(".osage").prop("title","The Philadelphia police department bombed a street in a residential area in Philadelphia.");
$(".kent").prop("title","On May 4, 1970 the Ohio National Guard killed four and wounded nine unarmed Kent State University students. The killings took place during a peace rally that was opposing the expanded US involvement of the Vietnam War into neutral Cambodia and the National Guard presence on campus. This was the first time that students had been killed in an anti-war gathering in US history. Here are the names of the students whodied: Allison Beth Krause, Jeffrey Glenn Miller, Sandra Lee Scheuer, and William Knox Schroeder.");
$(".mylai").prop("title","On March 16, 1968 US troops mass murdered unarmed Vietnamese civilians in the So’n Tinh District of South Vietnam. Between 347 and 504 civilians were killed, including children and infants. Some of the victims were gang-raped and their bodies were mutilated.");
$(".rosen").prop("title","In 1951 this American couple was convicted of espionage for spying on the behalf of the Soviet Union. They were the first American civilians to be executed for such charges and the first to suffer that penalty during peacetime.");
$(".nogun").prop("title","On July 26-29, 1950 American aircraft and troops opened fire on Korean refugees, and killed around 250-300 people (estimated). It has been argued that the troops opened fire on the refugees, because there were reports that North Korean soldiers had been disguising themselves in with refugees for surprise attacks. The United States government has yet to apologize for the massacre.");
$(".hiro").prop("title","After years of developing a bomb that could utilize nuclear fission, the United States dropped an atomic bomb on Hiroshima, on August 6 1945. Around 140,000 were killed due to the bomb, and its effects.");
$(".sacco").prop("title","Nicola Sacco and Bartolomeo Vanzetti were a couple of Italian immigrants accused and convicted of armed robbery. They were sentenced to death, and seven years later died by the electric chair. The trial and conviction has been found to be unfair, a result of anti-immigration and anti-anarchism sentiments held by Americans and the American judicial system.");
$(".panj").prop("title","On March 11, 2012, 38-year-old United States Army Staff Sergeant Robert Bales broke into three homes in three different locations in the Panjwai District of Kandahar Province, Afghanistanand murdered sixteen civilians and wounded six. Nine of these victims were children. Robert Bales was based at Joint Base Lewis-McChord. It has been said that base commodores did not give returning troops time to recover before sending them on more deployments. Additionally, the medical treatment facility at the base has been criticized for downgrading PTSD diagnoses. Here are the names of those who were killed: Mohamed Dawood, Khudaydad, Nazar Mohamed, Payendo, Robeena, Shatarina, Zahra, Nazia, Masooma, Farida, Palwasha, Nabia, Esmatullah, Faizullah, Essa Mohamed, and Akhtar Mohamed. And here are the names of the wounded: Haji Mohamed Naim, Mohamed Sediq, Parween, Rafiullah, Zardana, and Zulgeja.");
$(".ishaq").prop("title","The US committed mass murder of Iraqi civilains back in March 2006. The US was accused by the Iraqi police of killing 11 people, including children and women in their homes.");
$(".hadi").prop("title","On November 19, 2005 the United States Marines killed 24 unarmed Iraqi civilians in Haditha. An anonymous pentagon official found that the United States Marines shot and killed unarmed civilians which were men, women, elderly, a young one-year-old. The 24 dead bodies were taken to a local hospital, Dr Wahid said the bodies were brought to the hospital by two American humvees. When the bodies were taken to the local hospital the Marines claimed that the victims had been killed in a roadside bomb. Dr Wahid found no evidence of organs slashed but the victims were shot in the head and chest with close range. There was video evidence with photos that was taken by one of the marines. The evidence proved the killings were structured/planned.");
$(".al").prop("title","The factory was destroyed in 1998 by a missile attack launched by the United States government, killing one employee and wounding eleven.");


$(function() {
  $(document).tooltip();
});

$(document).ready(function () {
  $("img.raqqa").each(function(index, element) {
    $(element).wrap("<a href='https://www.reuters.com/article/us-mideast-crisis-syria-warcrimes/russia-and-u-s-air-strikes-caused-mass-civilian-deaths-in-syria-u-n-idUSKCN1GI1DY'></a>");
  });
  $("img.mosul").each(function(index, element) {
    $(element).wrap("<a href='https://en.wikipedia.org/wiki/2017_Mosul_massacre'></a>");
  });
  $("img.obama").each(function(index, element) {
    $(element).wrap("<a href='https://www.independent.co.uk/news/world/americas/us-president-barack-obama-bomb-map-drone-wars-strikes-20000-pakistan-middle-east-afghanistan-a7534851.html'></a>");
  });
  $("img.dakota").each(function(index, element) {
    $(element).wrap("<a href='https://en.wikipedia.org/wiki/Dakota_Access_Pipeline'></a>");
  });
  $("img.abu").each(function(index, element) {
    $(element).wrap("<a href='https://en.wikipedia.org/wiki/Abu_Ghraib_torture_and_prisoner_abuse'></a>");
  });
  $("img.amir").each(function(index, element) {
    $(element).wrap("<a href='https://www.aljazeera.com/features/2021/2/13/amiriyah-bombing-30-years-on-no-one-remembers-the-victims'></a>");
  });
  $("img.fall").each(function(index, element) {
    $(element).wrap("<a href='https://www.hrw.org/news/2013/02/13/iraq-investigate-deadly-army-shootings-fallujah'></a>");
  });
  $("img.osage").each(function(index, element) {
    $(element).wrap("<a href='https://www.vox.com/the-highlight/2019/8/8/20747198/philadelphia-bombing-1985-move'></a>");
  });
  $("img.kent").each(function(index, element) {
    $(element).wrap("<a href='https://en.wikipedia.org/wiki/Kent_State_shootings'></a>");
  });
  $("img.mylai").each(function(index, element) {
    $(element).wrap("<a href='https://en.wikipedia.org/wiki/M%E1%BB%B9_Lai_massacre'></a>");
  });
  $("img.rosen").each(function(index, element) {
    $(element).wrap("<a href='https://en.wikipedia.org/wiki/Julius_and_Ethel_Rosenberg'></a>");
  });
  $("img.nogun").each(function(index, element) {
    $(element).wrap("<a href='https://en.wikipedia.org/wiki/No_Gun_Ri_massacre'></a>");
  });
  $("img.hiro").each(function(index, element) {
    $(element).wrap("<a href='https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki'></a>");
  });
  $("img.sacco").each(function(index, element) {
    $(element).wrap("<a href='https://en.wikipedia.org/wiki/Sacco_and_Vanzetti'></a>");
  });
  $("img.panj").each(function(index, element) {
    $(element).wrap("<a href='https://en.wikipedia.org/wiki/Kandahar_massacre'></a>");
  });
  $("img.ishaq").each(function(index, element) {
    $(element).wrap("<a href='https://en.wikipedia.org/wiki/Ishaqi_incident'></a>");
  });
  $("img.hadi").each(function(index, element) {
    $(element).wrap("<a href='https://en.wikipedia.org/wiki/Haditha_massacre'></a>");
  });
  $("img.al").each(function(index, element) {
    $(element).wrap("<a href='https://en.wikipedia.org/wiki/Al-Shifa_pharmaceutical_factory'></a>");
  });
});
