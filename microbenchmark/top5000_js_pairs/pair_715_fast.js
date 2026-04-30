const Benchmark = {
    run: function() {
        VAR_1 = Array.from(Array(1000), (VAR_2, VAR_3) => ({
          [Math.random()]: { [Math.random()]: [Math.random()] },
        }));
        VAR_4 = JSON.stringify(VAR_1);
        JSON.parse(VAR_4);
    }
};