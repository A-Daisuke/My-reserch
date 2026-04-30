const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = new Uint16Array(65535);
        while (VAR_1 < 65535) VAR_2[VAR_1++] = 65535;
    }
};