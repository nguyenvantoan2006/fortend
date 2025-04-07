let contacts = [];
let nextId = 1;

function manageContacts() {
    let action = prompt("Chọn hành động: \n1. Thêm liên hệ \n2. Hiển thị danh bạ \n3. Tìm kiếm theo số điện thoại \n4. Cập nhật liên hệ \n5. Xóa liên hệ \n6. Thoát");

    while (action !== '6') {
        switch (action) {
            case '1': 
                let name = prompt("Nhập tên liên hệ:");
                let email = prompt("Nhập email liên hệ:");
                let phone = prompt("Nhập số điện thoại liên hệ:");
                contacts.push({ id: nextId++, name, email, phone });
                alert(" Đã thêm liên hệ thành công!");
                break;

            case '2': 
                if (contacts.length === 0) {
                    alert(" Danh bạ trống.");
                } else {
                    let contactList = "6 Danh sách liên hệ:\n\n";
                    contacts.forEach(contact => {
                        contactList += `ID: ${contact.id}\nTên: ${contact.name}\nEmail: ${contact.email}\nSố điện thoại: ${contact.phone}\n\n`;
                    });
                    alert(contactList);
                }
                break;

            case '3':
                let searchPhone = prompt("Nhập số điện thoại để tìm kiếm:");
                const foundContact = contacts.filter(c => c.phone === searchPhone);
                if (foundContact) {
                    alert(` Tìm thấy liên hệ:\nID: ${foundContact.id}\nTên: ${foundContact.name}\nEmail: ${foundContact.email}\nSố điện thoại: ${foundContact.phone}`);
                } else {
                    alert(" Không tìm thấy liên hệ có số điện thoại này.");
                }
                break;

            case '4': 
                let updateId = parseInt(prompt("Nhập ID của liên hệ cần cập nhật:"));
                let contactToUpdate = contacts.filter(c => c.id === updateId);
                if (contactToUpdate) {
                    contactToUpdate.name = prompt("Nhập tên mới:") || contactToUpdate.name;
                    contactToUpdate.email = prompt("Nhập email mới:") || contactToUpdate.email;
                    contactToUpdate.phone = prompt("Nhập số điện thoại mới:") || contactToUpdate.phone;
                    alert(" Cập nhật liên hệ thành công!");
                } else {
                    alert(" Không tìm thấy liên hệ cần cập nhật.");
                }
                break;

            case '5': 
                let deleteId = parseInt(prompt("Nhập ID của liên hệ cần xóa:"));
                let indexToDelete = contacts.findIndex(c => c.id === deleteId);
                if (indexToDelete !== -1) {
                    contacts.splice(indexToDelete, 1);
                    alert(" Đã xóa liên hệ thành công!");
                } else {
                    alert(" Không tìm thấy liên hệ cần xóa.");
                }
                break;

            default:
                alert(" Hành động không hợp lệ.");
        }

        action = prompt("Chọn hành động: \n1. Thêm liên hệ \n2. Hiển thị danh bạ \n3. Tìm kiếm theo số điện thoại \n4. Cập nhật liên hệ \n5. Xóa liên hệ \n6. Thoát");
    }

    alert(" Tạm biệt!");
}

manageContacts();
