import { id_ID, fakerID_ID } from "@faker-js/faker";
import { default as bopen } from "bopen";

let person = {
  name: fakerID_ID.person.firstName("female") + " " + fakerID_ID.person.lastName("female"),
};
person.email = fakerID_ID.internet
  .email({
    firstName: person.name.split(" ")[0],
    lastName: person.name.split(" ")[1],
    provider: "gmail.com",
  })
  .toLowerCase();

console.log(person);
var formArr = [
  null,
  [
    null,
    [
      [1669460465, "Nama", null, 0, [[1913877133, null, 1]], null, null, null, null, null, null, [null, "Nama"]],
      [53371786, "Email", null, 0, [[538976530, null, 1]], null, null, null, null, null, null, [null, "Email"]],
      [
        44308708,
        "Apakah anda sebelumnya pernah membeli Bros Hijab?",
        null,
        2,
        [
          [
            1219505772,
            [
              ["Ya", null, null, null, 0],
              ["Tidak", null, null, null, 0],
            ],
            1,
            null,
            null,
            null,
            null,
            null,
            0,
          ],
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        [null, "Apakah anda sebelumnya pernah membeli Bros Hijab?"],
      ],
      [
        2040026587,
        "Menurut anda bahan dasar apa yang cocok kami gunakan untuk Bros Hijab produk kami?",
        null,
        2,
        [
          [
            1575155605,
            [
              ["Mutiara", null, null, null, 0, ["1LRUTJMWl4mh6rqjfFMupO0BIvv96xaulmSfP9yCNU3Y8KEw", null, [260, 286, 0]]],
              ["Kain Flanel", null, null, null, 0, ["1wcAcZR8foyWe3at_UCQb1Wa2qY-V77oP38ty17X5NHDIbZg", null, [260, 148, 0]]],
            ],
            1,
            null,
            null,
            null,
            null,
            null,
            0,
          ],
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        [null, "Menurut anda bahan dasar apa yang cocok kami gunakan untuk Bros Hijab produk kami?"],
      ],
      [
        156833863,
        "Menurut anda apakah produk Bros Hijab seperti itu banyak di minati?",
        null,
        2,
        [
          [
            579859079,
            [
              ["Ya", null, null, null, 0],
              ["Tidak", null, null, null, 0],
            ],
            1,
            null,
            null,
            null,
            null,
            null,
            0,
          ],
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        [null, "Menurut anda apakah produk Bros Hijab seperti itu banyak di minati?"],
      ],
      [
        1420127430,
        "Apakah anda tertarik dengan produk Bros Hijab tersebut?",
        null,
        2,
        [
          [
            1608231458,
            [
              ["Ya", null, null, null, 0],
              ["Tidak", null, null, null, 0],
            ],
            1,
            null,
            null,
            null,
            null,
            null,
            0,
          ],
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        [null, "Apakah anda tertarik dengan produk Bros Hijab tersebut?"],
      ],
      [
        1108442180,
        "Menurut anda berapa harga yang cocok untuk produk Bros Hijab kami?",
        null,
        2,
        [
          [
            1752787116,
            [
              ["8.000 - 10.000", null, null, null, 0],
              ["12.000 - 15.000", null, null, null, 0],
            ],
            1,
            null,
            null,
            null,
            null,
            null,
            0,
          ],
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        [null, "Menurut anda berapa harga yang cocok untuk produk Bros Hijab kami?"],
      ],
      [
        1932544729,
        "Apakah harga yang kami tawarkan sudah terjangkau?",
        null,
        2,
        [
          [
            1174064927,
            [
              ["Ya", null, null, null, 0],
              ["Tidak", null, null, null, 0],
            ],
            1,
            null,
            null,
            null,
            null,
            null,
            0,
          ],
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        [null, "Apakah harga yang kami tawarkan sudah terjangkau?"],
      ],
      [
        948668468,
        "Jika barang dan harga yang kami berikan sesuai dengan anda, apakah anda akan membeli dengan jumlah banyak?",
        null,
        2,
        [
          [
            1232135675,
            [
              ["Ya", null, null, null, 0],
              ["Tidak", null, null, null, 0],
            ],
            1,
            null,
            null,
            null,
            null,
            null,
            0,
          ],
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        [null, "\u003cdiv\u003e\u003cspan\u003eJika barang dan harga yang kami berikan sesuai dengan anda, apakah anda akan membeli dengan jumlah banyak?\u003c/span\u003e\u003cbr\u003e\u003c/div\u003e"],
      ],
      [
        601407413,
        "Apakah anda akan merekomendasikan produk Bros Hijan kami kepada orang lain?",
        null,
        2,
        [
          [
            265273634,
            [
              ["Ya", null, null, null, 0],
              ["Tidak", null, null, null, 0],
              ["Mungkin", null, null, null, 0],
            ],
            1,
            null,
            null,
            null,
            null,
            null,
            0,
          ],
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        [null, "Apakah anda akan merekomendasikan produk Bros Hijan kami kepada orang lain?\u003cbr\u003e"],
      ],
      [
        425535202,
        "Menurut anda market place mana yang paling cocok untuk memasarkan produk Bros Hijab kami? ",
        null,
        2,
        [
          [
            1661868487,
            [
              ["Secara Online", null, null, null, 0],
              ["Secara Offline", null, null, null, 0],
            ],
            1,
            null,
            null,
            null,
            null,
            null,
            0,
          ],
        ],
        null,
        null,
        null,
        null,
        null,
        null,
        [null, "Menurut anda market place mana yang paling cocok untuk memasarkan produk Bros Hijab kami? \u003cbr\u003e"],
      ],
      [1976160154, "Saran", null, 0, [[1010646920, null, 1]], null, null, null, null, null, null, [null, "Saran"]],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    "Kuisioner Bros Hijab",
    66,
    [null, null, null, 2, 0, null, 1],
    null,
    null,
    null,
    null,
    [2],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    [null, "Kuisioner Bros Hijab"],
  ],
  "/forms",
  "Formulir tanpa judul",
  null,
  null,
  null,
  "",
  null,
  0,
  0,
  null,
  "",
  0,
  "e/1FAIpQLSfmfbWpCBIm_K-qc9GXdgPkDTkAOciNZFctoJt4d_gjnprfUg",
  0,
  "[]",
  0,
  0,
];
function parseFormArr(formArr) {
  var title = formArr[3];
  var qs = formArr[1][1];
  var formId = formArr[14];
  let questions = {};
  qs.forEach(element => {
    let name = element[1];

    let id = element[4][0][0];
    let type;
    let options = [];
    if (element[3] == 0 || element[3] == 1) type = "text";
    if (element[3] == 2) type = "radio";
    if (element[3] == 9) type = "date";
    if (type == "radio") {
      let opts = element[4][0][1];
      opts.forEach(opt => {
        options.push(opt[0]);
      });
    }
    //   console.log(name, id, type);
    let question = {
      name: name,
      id: id,
      type: type,
      options: options,
      fill: "",
    };
    // questions.push(question);
    questions = { ...questions, [id]: question };
    // console.log(questions);
  });
  //   console.log(questions);
  let form = {
    formId: formId,
    title: title,
    questions: questions,
  };
  //   console.log(form);
  return form;
  // console.log(title, qs);
}

function getpreffillUrl(form) {
  var url = "https://docs.google.com/forms/d/" + form.formId + "/viewform?usp=pp_url";
  //   form.questions.forEach(question => {
  //     url += "&entry." + question.id + "=";
  //   });
  let prefill = {
    1913877133: person.name,
    538976530: person.email,
    1219505772: "Ya",
    1575155605: ["Mutiara", "Kain Flanel"],
    579859079: "Ya",
    1608231458: "Ya",
    1752787116: ["8.000 - 10.000", "12.000 - 15.000"],
    1174064927: "Ya",
    1232135675: "Ya",
    265273634: ["Ya", "Mungkin"],
    1661868487: ["Secara Online", "Secara Offline"],
  };
  Object.keys(prefill).forEach(qid => {
    // if (typeof form.questions[qid] !== ")
    if (typeof prefill[qid] == "object") {
      //   console.log(qid, prefill[qid]);
      prefill[qid] = prefill[qid][Math.floor(Math.random() * prefill[qid].length)];
    }
    form.questions[qid].fill = prefill[qid];
  });

  Object.keys(form.questions).forEach(qid => {
    url += "&entry." + qid + "=" + form.questions[qid].fill;
  });

  //   console.log(form.questions);
  //   console.log(url);
  return encodeURI(url);
}

// console.log(parseFormArr(formArr));
let form = parseFormArr(formArr);
// bopen(getpreffillUrl(form), { browser: "edge", incognito: true, appArgs: ["--inprivate"] });
console.log(getpreffillUrl(form));
