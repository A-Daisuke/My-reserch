const Benchmark = {
    run: function() {
        VAR_1 = [];
        VAR_2 = null;
        VAR_3 = [1];
        try {
          VAR_1.length;
        } catch (VAR_4) {}
        try {
          VAR_2.length;
        } catch (VAR_5) {}
        try {
          VAR_3.length;
        } catch (VAR_6) {}
    }
};