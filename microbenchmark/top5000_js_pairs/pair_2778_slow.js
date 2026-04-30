const Benchmark = {
    run: function() {
        const VAR_1 = "aabcc";
        const VAR_2 = VAR_1.repeat(1000);
        const VAR_3 = VAR_2.split("");
        let VAR_4 = [];
        const VAR_5 = new Set(VAR_3);
        VAR_5.forEach((VAR_6) => {
          const VAR_7 = VAR_3.filter((VAR_8) => VAR_8 === VAR_6);
          if (VAR_7.length === 2) VAR_4.push(VAR_6);
        });
    }
};