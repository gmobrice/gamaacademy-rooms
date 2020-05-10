interface IRoom {
    photo: string,
    property_type: string,
    name: string,
    price: number
}

var rooms: IRoom[];

window.onload = function()
{
    let roomsHtmlObject: HTMLDivElement = <HTMLDivElement> document.getElementById('rooms-row');

    fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
    .then(resp => resp.json())
    .then((json) => {
        rooms = json;
        let i = 0;

        let loader = document.getElementById('loader');
        loader.classList.remove('d-flex');
        loader.classList.add('d-none');

        for (let room of rooms)
        {
            let newRoom = document.createElement('div');
            newRoom.classList.add('col-lg-4', 'col-md-6', 'col-xs-12', 'mb-4')

            let card = document.createElement('div');
            card.classList.add('card');

            let image = document.createElement('img');
            image.classList.add('card-img-top');
            image.src = room.photo;
            image.alt = room.name;

            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            let roomTitle = document.createElement('h5');
            roomTitle.classList.add('card-title');
            roomTitle.textContent = room.name;

            let roomType = document.createElement('h6');
            roomType.classList.add('card-subtitle', 'text-info', 'mb-2');
            roomType.textContent = room.property_type;

            let roomPrice = document.createElement('p');
            roomPrice.classList.add('price');
            roomPrice.textContent = '$ ' + room.price.toString();

            cardBody.append(roomTitle, roomType, roomPrice);
            card.append(image, cardBody);
            newRoom.appendChild(card);

            roomsHtmlObject.appendChild(newRoom);
        }
    });
}