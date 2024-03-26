function validation(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มเมื่อ validation ไม่ผ่าน
    let isValid = true;
    if (document.formfill.Objectname.value == "") {
        document.getElementById("result").innerHTML = "Enter Object Name";
        return false;
    } else if (document.formfill.Description.value == "") {
        document.getElementById("result").innerHTML = "Enter Description";
        return false;
    } else if (document.formfill.Price.value == "") {
        document.getElementById("result").innerHTML = "Enter Price";
        return false;
    }
    if (isValid) {
        addNewItem();
    }
}

function addNewItem() {
    let Obj_Name = document.formfill.Objectname.value;
    let Descri = document.formfill.Description.value;
    let Price = document.formfill.Price.value;

    // สร้างอ็อบเจ็กต์ Item ขึ้นมา
    let newItem = new Item(Obj_Name, Descri, Price);

    // แสดงข้อมูลของ newItem ใน ItemsList
    document.getElementById("ItemsList").innerHTML += `<div>Object Name: ${newItem.Obj_Name} | | Description: ${newItem.Descri} | | Price:  ${newItem.Price} Bath.</div>`;

    // ล้างค่าในฟอร์ม
    document.formfill.reset();

}

class Item {
    constructor(Obj_Name, Descri, Price) {
        this.Obj_Name = Obj_Name;
        this.Descri = Descri;
        this.Price = Price;
    }
}