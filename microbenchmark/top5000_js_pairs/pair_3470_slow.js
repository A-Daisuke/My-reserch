const Benchmark = {
    run: function() {
        var VAR_1 = "+310123456789";
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          if (VAR_1.match(new RegExp("^\\+" + VAR_2))) {
            console.log("yep");
          }
        }
    }
};