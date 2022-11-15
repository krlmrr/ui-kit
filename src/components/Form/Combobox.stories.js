import Combobox from "@/components/Form/Combobox.vue"

export default {
    title: "Form/Combobox",
    component: "Combobox",
}

const Template = (args) => ({
    components: { Combobox },
    setup: () => ({ args }),
    template: '<Combobox v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  label: "Select a Driver",
  options: [
    {"id":17,"first_name":"Alexander","last_name":"Albon","number":23,"birthday":"1996-03-23","constructor_id":10,"country":"Thailand","position_last_season":17,"championship_points":0,"is_rookie":0,"new_to_constructor":0,"GPs_entered":345,"podiums":103,"all_time_wins":21,"number_of_times_picked":0,"profile_image":"/assets/drivers/Albon.jpg","bio":"Born in London but racing under the flag of Thailand, Alexander Albon’s first word was in fact Italian. That word was Ferrari – though it was with another Italian team that he got his big F1 break. <br><br>\n\nIdolising Michael Schumacher and dreaming of one day racing in Formula 1, the junior Albon was pipped to the 2016 GP3 title by a certain Charles Leclerc. He then left his great friendship with George Russell trackside as he took the 2018 Formula 2 title fight down to the wire.<br><br>\n\nGraduating to the F1 big league along with yet another contemporary – Lando Norris – in 2019, Albon did his talking on track with Toro Rosso in the opening races, earning a mid-season promotion to Red Bull Racing.<br><br>\n\nA stylish over-taker with a championship mentality, Albon was unfazed by partnering Max Verstappen for the second half of his rookie season, taking top-six finishes in eight of his nine 2019 races with Red Bull.<br><br>\n\nStaying in touch with the future champion proved tougher in 2020 and Red Bull dropped him from their race line-up. Crucially, though, Albon was retained as test and reserve driver, keeping him very much on team bosses’ radar, leading to his 2022 return to the grid with Williams.<br><br>\n\nLaidback and cheerful with a cheeky grin, the Thai racer is popular among his peers – not always easy in motorsport’s cauldron of competition – but you don’t succeed in Formula 1 by being popular. Albon’s challenge now is a big one – to make the most of a rare second F1 opportunity.\n","created_at":"2022-05-05T02:55:44.000000Z","updated_at":null},
    {"id":10,"first_name":"Fernando","last_name":"Alonso","number":14,"birthday":"1981-07-29","constructor_id":5,"country":"Spain","position_last_season":10,"championship_points":0,"is_rookie":0,"new_to_constructor":0,"GPs_entered":329,"podiums":97,"all_time_wins":32,"number_of_times_picked":0,"profile_image":"/assets/drivers/Alonso.jpg","bio":"Michael Schumacher was the undisputed king of Formula 1 in the early 2000s, picking up wins and championships at a rate that was simply unheard of at the time. It was going to take someone very special to topple the Ferrari legend from his throne – and that it was Fernando Alonso who did it, tells you all you need to know about the Spaniard. <br><br>\n\nFiercely competitive, Alonso is not shy about his talent, rating himself as 9/10 “in everything”, and few in the know would disagree, with his performances in F1 characterised by blistering speed, brilliant tactical thinking, exemplary race craft, a razor-sharp eye for detail and a relentless determination to win.<br><br>\n\nA serial record breaker in his early days, he was – at one time – F1’s youngest polesitter, race winner, world champion and double world champion as he gobbled up success with the Renault team. Even Alonso couldn’t continue that amazing run in his later career though, failing to add another title to his collection despite spells at McLaren and Ferrari.<br><br>\n\nBut after two years away from Formula 1 racing – and with two Le Mans wins in his pocket – Alonso returned with Alpine in 2021. And he has unfinished business with F1…","created_at":"2022-05-05T02:55:44.000000Z","updated_at":null},
    {"id":3,"first_name":"Valtteri","last_name":"Bottas","number":77,"birthday":"1989-08-28","constructor_id":8,"country":"Finland","position_last_season":3,"championship_points":0,"is_rookie":0,"new_to_constructor":0,"GPs_entered":171,"podiums":64,"all_time_wins":9,"number_of_times_picked":0,"profile_image":"/assets/drivers/Bottas.jpg","bio":"Learning his craft on Finnish roads of ice and snow, he was born to be a Grand Prix racer.<br><br>\n\nBottas explains that if you can drive on the frozen roads of his homeland then you can drive anywhere. Then there’s the Finnish mentality –reserved, diligent and calm the fast lane of F1 doesn’t faze him.<br><br>\n\nMaking his F1 debut with Williams in 2013, Bottas soon became part of the family. Points and podiums followed with the reliable racer even amassing the most points without a win, a record he resented but that showcased his ability. The fact the Finn was such a points machine saw him suddenly promoted to the most coveted seat in F1 - Nico Rosberg’s vacant championship-winning seat at Mercedes.<br><br>\n\nBottas blossomed at the Silver Arrows in 2017, unleashing his pace to clock up personal pole positions and victories as well as a team championship for the famous Mercedes marque alongside Lewis Hamilton. He even tied with Hamilton and Sebastian Vettel with 13 podiums.<br><br>\n\nFor a shy guy, it brought a confidence boost and a new swagger – albeit in a very demur Finnish fashion. He would need all that confidence in 2018 – a season Bottas described as his worst in F1, as he took zero wins to Hamilton’s 11. That, though, was a reflection more of his team mate’s brilliance than of any shortcomings on his own part.<br><br>\n\nBottas stepped it up a level in 2019, four victories securing a convincing second in the championship behind Hamilton, but that dropped to two wins to his team mate's 11 in 2020 and then just one in 2021, prompting Mercedes to drop him after five seasons.<br><br>\n\nFor 2022 he starts a new chapter in his F1 career, replacing compatriot Kimi Raikkonen to lead an all-new line-up at Alfa Romeo, where he is charged with taking Chinese rookie Zhou Guanyu under his wing.","created_at":"2022-05-05T02:55:44.000000Z","updated_at":null}
  ]
}