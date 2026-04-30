const Benchmark = {
    run: function() {
        let VAR_1 = {};
        if (
          typeof VAR_1 === "object" &&
          typeof VAR_1.nest === "object" &&
          typeof VAR_1.nest.VAR_2 === "string"
        ) {
          var VAR_2 = VAR_1.nest.VAR_2;
        }
    }
};