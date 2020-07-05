Notification.requestPermission().then(function(result) {
  console.log(result);
});

function showNotification(name, imageUrl) {
  new Notification('SINoAlice Event', 
        { body: name + ' begins in 5 minutes!', icon: imageUrl }
  );
};

console.log("startup");
setInterval(function() {
    const rows = Array.from(
            document
            .getElementsByTagName("table")[1]
            .getElementsByTagName("tbody")[0]
            .children
        )
        .forEach(function(row) {
            const timeLeft = row.children[0].textContent.split(" ")[2];
            const name = row.children[3].textContent;
            if (timeLeft.startsWith("00:05:00")) {
                showNotification(
                    name,
                    row.children[3].getElementsByTagName("img")[0].attributes["src"].value
                );
            }
        });
}, 1000);
