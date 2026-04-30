const Benchmark = {
    run: function() {
        let VAR_1 = new Array(200).fill({
          KEY_1: "Test",
          KEY_2: {
            KEY_3: true,
            KEY_4: 42,
          },
        });
        let VAR_2 = VAR_1
          .map((VAR_3) => `name: ${VAR_3.KEY_1}, test: ${VAR_3.KEY_2.KEY_3}`)
          .join("\n");
    }
};