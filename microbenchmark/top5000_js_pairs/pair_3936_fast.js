const Benchmark = {
    run: function() {
        var VAR_1 = new Array(2000);
        var VAR_3 = VAR_1.length;
        while (VAR_3--) {
          if (VAR_1[VAR_3]) VAR_1.shift();
        }
    }
};