<template>
  <div>
    <div class="newsinfo-container">
      <h3 class="title">{{newsinfo.title}}</h3>
      <p class="subtitle">
        <span>发表时间：{{newsinfo.add_time}}</span>
        <span>点击：{{newsinfo.click}}次</span>
      </p>
      <div
        class="content"
      >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat rerum corrupti laborum tempora, aliquam pariatur aperiam magnam. Fuga porro harum dicta aliquid soluta provident ipsa dolorem voluptates dolor quidem.
       Ab, nobis. Maiores, harum incidunt, consequuntur esse repellat laborum est id nulla expedita mollitia ut veniam exercitationem voluptatem eligendi ratione impedit molestias explicabo labore excepturi nemo enim tempore totam perferendis?
       Architecto corrupti obcaecati libero numquam provident eaque iste, nam aut error illum officiis adipisci odio aliquam, quidem, consequatur assumenda cum nesciunt quibusdam voluptatem ipsam sunt porro cupiditate? Cumque, nisi aliquam?
       Quidem sed porro esse aliquid voluptatum corporis sit, saepe et minima accusantium totam id expedita quibusdam repellat optio perspiciatis doloremque magni iste excepturi ratione fugiat ipsum magnam at consectetur. Soluta.
       Possimus doloremque dolores odit fugiat soluta laudantium repudiandae blanditiis. Laudantium repellendus, vero iure maiores, enim fugit alias hic ipsam perferendis tempora provident minus repudiandae quae at exercitationem voluptatibus repellat explicabo.
       Placeat, fuga, magnam repellendus ab voluptatum ad, laboriosam quo iusto enim ipsa excepturi doloribus? Porro excepturi saepe officia veniam et sapiente atque at impedit labore, blanditiis alias qui consequatur assumenda.
       Ab, voluptatum voluptates beatae id corrupti iusto ea iure deleniti eaque fuga sunt a doloribus. Est cum ea rerum harum enim numquam nobis minima sit, voluptatem assumenda eveniet ad perspiciatis.
       Ducimus at veritatis inventore perferendis vero nesciunt vel hic? Sed cum deleniti quod possimus commodi facere debitis, est vel qui accusamus a eum dolores doloremque eligendi exercitationem iusto voluptatem. Vel!
       Aspernatur rem eos dicta consequuntur enim ab optio. Quae vero at, consequatur eum inventore accusamus, assumenda autem facilis, explicabo alias temporibus? Maxime cum libero quis iure reiciendis similique sequi est.
       Maiores excepturi dicta vel mollitia, numquam rerum nam, et obcaecati soluta porro laudantium nisi adipisci illum beatae quaerat omnis reprehenderit neque ex consequatur quas ab eveniet similique earum. Ex, cum.
       Ab soluta ipsum corrupti ut id ratione nulla aliquam, cupiditate, rerum reiciendis totam officia enim, repellendus sequi porro sed. Voluptates laboriosam neque perspiciatis. Quo aperiam ea perferendis dignissimos saepe officiis!
       Laudantium architecto natus distinctio, suscipit, laborum fuga sint impedit corporis, necessitatibus ipsam magni modi. Dolore, error adipisci quod sit neque repellendus quis iusto sed fuga, quam ipsam optio, dignissimos mollitia.
       Autem eius numquam, voluptatum quae quidem quas natus ex non beatae voluptate laboriosam magnam quis expedita praesentium sequi ipsa cumque ipsam quo porro dignissimos voluptatem amet ipsum. Illum, hic a!
       Ut veniam fuga eos excepturi itaque suscipit tempora minima at nam rem reiciendis perspiciatis impedit, veritatis repudiandae odio aliquid totam labore doloremque iusto pariatur provident velit. Voluptatum accusamus ipsa repudiandae!
       Nulla beatae dicta esse voluptates itaque similique dolorem vel, magnam consequuntur voluptas fugiat dolor mollitia libero magni quibusdam voluptatem facilis? Expedita minima cumque error accusamus eligendi debitis quidem tenetur cum!
       Expedita eaque culpa ex excepturi praesentium maxime sint. Inventore eos quod debitis neque consectetur nulla explicabo quisquam adipisci quam iusto sed fugit aperiam odio, dolorem deleniti expedita iste recusandae corporis!
       Quia animi aut odit, vel sed mollitia fuga laborum dolores molestias quos sunt, asperiores culpa. Esse quidem totam voluptate nemo. Cum voluptatibus aperiam inventore pariatur ab error, similique itaque aliquam.
       Doloremque ullam, sapiente aspernatur, accusantium labore ipsam reprehenderit consequatur necessitatibus rerum assumenda atque perspiciatis? Nulla quidem consequuntur, neque at maxime dolores facilis quae quia delectus explicabo quas porro, soluta nam.
       Sit expedita quibusdam dolorem magnam maiores odio laboriosam sapiente enim accusantium suscipit quae dicta consequatur tenetur, doloribus facilis illo ducimus necessitatibus, excepturi alias recusandae odit fugiat perferendis? Ad, repellat molestias.
       Officia hic voluptatum enim cum aperiam totam voluptatem sit temporibus minus quod in ipsum quidem deserunt harum aut rerum nam magni odio cupiditate recusandae laudantium molestiae ipsam, expedita provident. Doloremque.
       </div>

      <comment-box :id='this.id'></comment-box>

    </div>

  </div>
</template>

<script>
import Comment from '../comments/Comments.vue'
export default {
  data() {
    return {
      id: this.$route.params.id, //方便去调用
      newsinfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      // this.$http.get('' + this.id).then(result => {
      //     if(result.body.status === 0){
      //         this.newslist = result.body;
      //     }else{
      //     }
      // })
      this.newsinfo = {
        id: 1,
        title: "三次阅兵",
        url: "../../images/Home/news/new1.jpg",
        add_time: "2019-12-13 16:23:33",
        click: 3
      };
    }
  },
  components : {
      "comment-box" : Comment,

  },
};
</script>

<style  scoped>
.newsinfo-container {
  border-bottom-style: 2px solid #ccc;
  padding: 0 10px;
  /* overflow: auto; */
  margin-bottom: 100px;
}
.title {
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color: red;
}
.subtitle {
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
.content {
  /* border-top-style: 10px solid #ccc!important; */
  border-top-color: rgb(204, 204, 204);
  border-top-style: solid;
  border-top-width: 2px;
  padding-top: 6px;
  /* border-top-width: 2px;
    border-top-color: black; */
}
</style>

<style >

</style>