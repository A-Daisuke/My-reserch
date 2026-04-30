const Benchmark = {
    run: function() {
        var VAR_1 = "sparc-eabi-gcc3";
        var VAR_2;
        var VAR_3 = /-([^-]*)$/;
        for (var VAR_4 = 0; VAR_4 < 100000; VAR_4++) VAR_2 = VAR_1.split("-").splice(1).join("-");
    }
};