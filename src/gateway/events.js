const baseUrl = 'https://6245c105e3450d61b0f633d2.mockapi.io/api/v1/events';

export const getEventList = () => 
  fetch(baseUrl).then(response => {
    if (response.ok) {
    return response.json();
      }
throw new Error("Internal Server Error. Can't display events");
  });

export const creteEvent = (eventData) => {
 return  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(eventData),
  })
};

export const deleteEventItem = (eventId) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  });
};
