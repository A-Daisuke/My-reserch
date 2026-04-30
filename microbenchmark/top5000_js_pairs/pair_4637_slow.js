const Benchmark = {
    run: function() {
        let VAR_1 = new Array(200).fill({
          KEY_1: "Test",
          KEY_2: {
            KEY_3: true,
            KEY_4: 42,
          },
        });
        let VAR_2 = "";
        for (let VAR_3 in VAR_1) {
          let VAR_4 = VAR_1[VAR_3];
          VAR_2 += `name: ${VAR_4.KEY_1}, test: ${VAR_4.KEY_2.KEY_3}\n`;
        }
    }
};