const Benchmark = {
    run: function() {
        VAR_1 = Array.from(Array(1000), (VAR_2, VAR_3) => ({
          [Math.random()]: { [Math.random()]: [Math.random()] },
        }));
        VAR_4 = JSON.stringify(VAR_1);
        JSON.parse(VAR_4, (VAR_5, VAR_6) => {
          if (VAR_6 && typeof VAR_6 === "object" && !Array.isArray(VAR_6)) {
            VAR_6.VAR_7 = null;
          }
          return VAR_6;
        });
    }
};