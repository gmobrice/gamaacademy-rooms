var rooms;
window.onload = function () {
    var roomsHtmlObject = document.getElementById('rooms-row');
    fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
        .then(function (resp) { return resp.json(); })
        .then(function (json) {
        rooms = json;
        var i = 0;
        var loader = document.getElementById('loader');
        loader.classList.remove('d-flex');
        loader.classList.add('d-none');
        for (var _i = 0, rooms_1 = rooms; _i < rooms_1.length; _i++) {
            var room = rooms_1[_i];
            var newRoom = document.createElement('div');
            newRoom.classList.add('col-lg-4', 'col-md-6', 'col-xs-12', 'mb-4');
            var card = document.createElement('div');
            card.classList.add('card');
            var image = document.createElement('img');
            image.classList.add('card-img-top');
            image.src = room.photo;
            image.alt = room.name;
            var cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            var roomTitle = document.createElement('h5');
            roomTitle.classList.add('card-title');
            roomTitle.textContent = room.name;
            var roomType = document.createElement('h6');
            roomType.classList.add('card-subtitle', 'text-info', 'mb-2');
            roomType.textContent = room.property_type;
            var roomPrice = document.createElement('p');
            roomPrice.classList.add('price');
            roomPrice.textContent = '$ ' + room.price.toString();
            cardBody.append(roomTitle, roomType, roomPrice);
            card.append(image, cardBody);
            newRoom.appendChild(card);
            roomsHtmlObject.appendChild(newRoom);
        }
    });
};
//# sourceMappingURL=scripts.js.map