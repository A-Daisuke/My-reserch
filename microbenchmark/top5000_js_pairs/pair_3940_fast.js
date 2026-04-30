const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1024).join("hello!\n");
        var VAR_2 = 0,
          VAR_3 = -1;
        while ((VAR_3 = VAR_1.indexOf("\n", VAR_3 + 1)) !== -1) VAR_2++;
    }
};