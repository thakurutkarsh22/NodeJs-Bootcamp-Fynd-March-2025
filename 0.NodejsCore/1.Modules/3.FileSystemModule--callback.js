const fs = require("node:fs");

// -------------- CREATE A FILE ------------------------

/*
fs.appendFile("../0.FileSystemDump/filezzz.txt", "Hi there NodeJS world", 
    (error) => {
        if(error) {
            console.log("error ", error);
        }
});
*/


// --------------- READ A FILE -------------------------

/*
fs.readFile("../0.FileSystemDump/filezzz.txt", (err, data) => {
    if(err) {
        console.log("error ::: ", err);
    }  else {
        console.log("HERES IS MY DATA ::::")
        console.log(data); // Buffer Data (Binary)
        console.log(data.toString()); 
    }
});
*/


//  ------------- Update a file --------------

/*
fs.appendFile("../0.FileSystemDump/filezzz.txt", "\nsecond line", (error) => {
    if(error) {
        console.log("error ", error);
    }
})
*/


// ----------------- DELETE A FILE -----------

// fs.unlink("../0.FileSystemDump/filezzz.txt", error => {
//     if(error) {
//         console.log("error ", error);
//     } else {
//         console.log("file is deleted")
//     }
// });


// -------------------- Rename a FILE ----------

/*
fs.rename("../0.FileSystemDump/filezzz.txt", "../0.FileSystemDump/file.txt", (err) => {
    if(err) {
        console.log("error ", error);
    } else {
        console.log("file is renamed successfully");
    }
})
*/




//  ------------- ASYNC ----------------
/*
console.log("a");
fs.appendFile("../0.FileSystemDump/filezzz.txt", "Hi there NodeJS world", 
    (error) => {
        if(error) {
            console.log("error ", error);
        } else {
            console.log("file is created succesfully")
        }
});
console.log("b");
*/

// a
// b
// file is created succesfully


//--------------------  SYNC  --------------------
// in Nodejs Be very very careful and mindful if you are using any method which ends with sync. 
/*
console.log("a");
const string = `Adipisicing exercitation ex quis occaecat officia voluptate irure dolore sunt aliquip minim ex laboris velit. Voluptate id veniam excepteur ullamco amet magna ea sint consectetur sunt sunt et mollit. Sunt velit cupidatat ipsum nostrud non magna.
Qui reprehenderit tempor nisi ex excepteur voluptate eu sunt mollit ipsum. Laborum labore incididunt tempor nisi aliqua commodo ipsum reprehenderit. Qui ut mollit do esse dolor dolor nostrud fugiat duis.

Dolore ut eu ea fugiat et aute. Reprehenderit sint aliqua ex sit ea. Nostrud officia est nostrud deserunt adipisicing. Dolore ea velit exercitation ad do nulla fugiat. Proident qui mollit anim do non aliquip. Dolor irure excepteur eiusmod ut sunt eiusmod occaecat consequat. Cillum et ipsum eiusmod reprehenderit ipsum deserunt enim enim sit tempor laborum incididunt ut qui.

Proident pariatur deserunt incididunt ipsum in amet dolore officia consectetur. Voluptate do eiusmod aliqua ea sunt nostrud mollit pariatur deserunt dolore minim. Consectetur exercitation velit occaecat ea nulla occaecat pariatur duis occaecat aliqua laboris ipsum anim do. Veniam nulla elit anim ad deserunt et do ea veniam fugiat reprehenderit dolor aliqua exercitation. Ullamco aliquip nisi cupidatat quis nisi cupidatat esse incididunt. Mollit mollit fugiat aute laboris. In eu ullamco ex fugiat consectetur ad dolor tempor.

Aliqua quis aliqua aliqua do labore commodo aliquip eiusmod nulla aliqua. Quis qui est anim eu eiusmod reprehenderit quis deserunt elit non do veniam qui. Commodo nulla non qui dolor irure excepteur veniam qui qui dolore officia esse magna.

Enim exercitation ut mollit et nostrud exercitation voluptate exercitation dolore enim. Cillum labore exercitation elit est. Irure magna Lorem ea officia enim reprehenderit nisi ex laborum nisi tempor veniam dolore aute. Fugiat ut culpa Lorem magna in sunt sit adipisicing.

Dolore ipsum veniam adipisicing irure. Amet in nulla in pariatur aliquip aute officia aliqua nulla. Non fugiat ipsum elit laborum nulla commodo exercitation consequat aute. Cillum mollit sit aliqua cillum eu nulla.

Proident Lorem nulla commodo anim. Ullamco reprehenderit exercitation ullamco qui culpa qui. Eiusmod magna consequat deserunt exercitation voluptate Lorem eu in ullamco in est. Ex mollit duis aliqua nostrud aliqua proident cupidatat. Adipisicing ut adipisicing sunt aute ad duis officia proident labore laborum magna consectetur eiusmod.

Reprehenderit elit non aliqua sit sint mollit fugiat labore amet esse. Commodo ullamco mollit Lorem velit esse id nostrud exercitation laborum occaecat cupidatat consequat. Labore minim id enim reprehenderit fugiat elit consectetur minim adipisicing elit adipisicing. Nisi nulla ut fugiat sunt excepteur ullamco magna qui incididunt aliquip et ex sunt pariatur. Eu labore sunt excepteur et. Adipisicing et consectetur reprehenderit aute consectetur ad nulla excepteur quis commodo laboris id incididunt elit.

Reprehenderit irure consectetur nostrud non ad ut. Ex officia sit do sint dolore quis aute id elit aute excepteur pariatur. Consequat esse ea adipisicing eiusmod deserunt. Fugiat incididunt ea minim officia Lorem adipisicing amet elit officia cillum duis labore ipsum. Velit Lorem elit consequat dolore amet tempor minim labore magna dolore non. Cillum ut pariatur nisi excepteur.

Anim ipsum in officia sit est non qui culpa proident duis aliquip. Esse occaecat esse laborum cupidatat non cupidatat cupidatat do magna ipsum eu sint dolor. Do commodo adipisicing laboris sint quis sint incididunt consectetur fugiat consectetur ex dolore cupidatat.`

fs.appendFileSync("../0.FileSystemDump/filezzz2.txt", string)
console.log("b");
*/



// read file 

console.log("a");
try {
    const fileCOnetntString = fs.readFileSync("../0.FileSystemDump/filezzz.txt", "utf-8")
    const fileCOnetntBuffer = fs.readFileSync("../0.FileSystemDump/filezzz.txt") 
    console.log(fileCOnetntString)
    console.log(fileCOnetntBuffer)
} catch(error) {
    console.log(error);
}

console.log("b");
