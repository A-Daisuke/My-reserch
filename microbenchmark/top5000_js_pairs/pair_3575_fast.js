const Benchmark = {
    run: function() {
        const VAR_1 = Array(1000).fill({
          KEY_1: "kyle",
          KEY_2: "fdjis@fido.com",
          KEY_3: "dingo",
        });
        const VAR_4 = Array(VAR_1.length * 3);
        let VAR_5 = 0;
        for (let VAR_6 = 0; VAR_6 < VAR_1.length; VAR_6++) {
          if (VAR_1[VAR_6].KEY_1) VAR_4[VAR_5++] = VAR_1[VAR_6].KEY_1;
          if (VAR_1[VAR_6].KEY_2)
            VAR_4[VAR_5++] = VAR_1[VAR_6].KEY_2;
          if (VAR_1[VAR_6].KEY_3) VAR_4[VAR_5++] = VAR_1[VAR_6].KEY_3;
        }
        VAR_7 = VAR_1.slice(0, VAR_5);
    }
};