const Benchmark = {
    run: function() {
        var VAR_1 = new Array(301).join("1#").split("#"),
          VAR_3 = VAR_1.length;
        while (VAR_3--) {}
    }
};