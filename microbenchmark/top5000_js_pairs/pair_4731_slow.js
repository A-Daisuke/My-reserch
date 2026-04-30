const Benchmark = {
    run: function() {
        var VAR_1 = "foo   fas   h h sj      b va       var    bar  ";
        while (VAR_1.indexOf("  ") > -1) {
          VAR_1 = VAR_1.replace("  ", " ");
        }
    }
};