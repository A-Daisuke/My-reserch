const Benchmark = {
    run: function() {
        var VAR_1 = "html5";
        var VAR_2 =
          VAR_1 === "html5"
            ? function () {
                return "Good choice!";
              }
            : function () {
                return "Bad choice!";
              };
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_2();
        }
    }
};