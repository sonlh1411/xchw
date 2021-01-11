(life = () => {
  const foo = (x) => {
    var y = x * 2;

    return (bar = (z) => {
      if (z.length > 3) {
        return z.map(
          (baz = (v) => {
            console.log(v);
            return v > 3 ? v + y : baz(v * 4);
          })
        );
      } else {
        var obj = [];
        setTimeout(
          (bam = () => {
            obj.length = 1;
            obj[0] = 42;
          }),
          100
        );
        return obj;
      }
    });
  };
  var p = foo(2);
  var list1 = [1, 3, 4];
  var list2 = list1.concat(6);
  list1 = p(list1);
  list2 = p(list2);
  setTimeout(() => {
    console.log(list2);
    console.log(
      list1[0] ===
        list2.reduce((s, v) => {
          console.log(s, v);
          return s + v;
        }, 0)
    );
  }, 200);
})();
