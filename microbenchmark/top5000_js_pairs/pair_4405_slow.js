const Benchmark = {
    run: function() {
        let VAR_1 = {};
        try {
          var VAR_2 = VAR_1.nest.VAR_2;
        } catch (VAR_3) {}
    }
};