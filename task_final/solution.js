// ????????? ??????? sendRequest
// ????????? ???????:
// - ??? ???????
// - ??????? ???????
// - ?????? ? ??????? ????????: {street, house, entrance, floor, flat}
// - ?????? ??????? ? ??????
// - ????????? ?????? ? ?????? ?????? ? ????????
// ??? ????????? ??????? ????????? ??????? JSON,
// c????????????? ? ???????????? ? ?????????:
// ?????? data ???????? ??? ??????
// ? ??????? data ???? ????????:
// - client - ??????, ??? ??????? + ????? ????? ??????? ???????;
// - order - ??????, ?????????? ?????? ? ??????:
//     - address - ????? ????????
//     - sum - ????????? ?????? ? ?????? ?????? ? ????????
// - goods: ?????? ???????? ? ??????????? ? ???????? ??????:
//     - title - ???????? ???????
//     - count - ?????????? ? ??????
// ????????:
// {
//    "data": {
//      "client": "???? +7(987)65-43-210",
//      "order": {
//        "address": "??. ??????, ??? 2, 4 ???????, 5 ????, ?? 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "?????",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {
    let client = name + " " + phone;
    let addressHumanReadable = "ул. " + address.street + ", дом " + address.house + ", "+ address.entrance + " подъезд, "+ address.floor+" этаж, кв " + address.flat;
    
    let newGoods = [];
    
    for (let i=0; i< goods.length; i++ ){
        let item = goods [i];
        let newitem = {title:item.title, count:item.count};
        newGoods [i] = newitem; 
    }

    let data = {client, order: {address: addressHumanReadable, sum}, goods:newGoods};
    return JSON.stringify({data});
}