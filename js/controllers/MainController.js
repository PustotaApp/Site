myApp.controller("MainController", function ($scope)
{
  number = 0;
  list = new Array;
  for (var i = 0; i < AllList.telescop.length; i++)
  {
    list[i] =
    {
      name: AllList.telescop[i].name,
      price: AllList.telescop[i].price,
      imgURL: AllList.telescop[i].imgURL,
      alt: "telescop",
      targetURL: String(AllList.telescop[i].index)
    };

  }
  console.log(list[0].targetURL);

  $scope.next = function ()
  {
      number = (number + 1) % list.length;
      update(number);
  }

  $scope.back = function ()
  {
      number = (number - 1) < 0 ? (list.length - 1) : number - 1;
      update(number);
  }

  function update(index)
  {
    $scope.prev =
    {
      name: list[index].name,
      price: list[index].price,
      imgURL: list[index].imgURL,
      alt: list[index].alt,
      targetURL: "#!/article/" + list[index].targetURL
    };
  }

  update(0);
});
