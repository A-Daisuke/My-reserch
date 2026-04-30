const Benchmark = {
    run: function() {
        const VAR_1 = [];
        let VAR_2 = 1000;
        while (--VAR_2) {
          VAR_1.push(VAR_2);
        }
        const VAR_3 = [999, 0, 323, 314, 998, 65, 3, 156, 7, 8, 9, 98];
        let VAR_4 = VAR_1;
        for (const VAR_5 of VAR_3) {
          VAR_4 =
            VAR_5 === 0
              ? VAR_1.slice(1)
              : VAR_5 === VAR_1.length - 1
                ? VAR_1.slice(0, VAR_1.length - 1)
                : VAR_1.slice(0, VAR_5).concat(VAR_1.slice(VAR_5 + 1));
        }
    }
};