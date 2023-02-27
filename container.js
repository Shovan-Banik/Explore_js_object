const balish={color:'red', ingredients:'tula',price:700,isSoft:true}
const keys=Object.keys(balish);/* object.keys diye object ar sob keys paoa jay aksathe array akare */
// console.log(keys);
const values=Object.values(balish);/* object.values diye object ar sob value paoa jay aksathe array akare */
// console.log(values);
const pair=Object.entries(balish);/* object.entries diye property ar vitor key ar value sob e paoa jay aksathe array akare */
// console.log(pair);
console.log(balish);
Object.seal(balish);/* seal korle object k sudhu amtro modify kora jay object value k....add or delete kra jay na */
Object.freeze(balish); /* freeze korle oi object k kicui kora jay na...mane delete,add,modify kiccu na */
delete balish.color;/* seal or freeze na korle object theke property delete kora jay */
balish.price=900;
balish.weight='200 gm';
console.log(balish);