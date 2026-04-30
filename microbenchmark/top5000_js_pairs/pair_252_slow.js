const Benchmark = {
    run: function() {
        const VAR_1 = [];
        const FUNCTION_1 = () => {
          const VAR_2 = 1546300800000 + Math.floor(Math.random() * 13042800000);
          return new Date(VAR_2).toISOString();
        };
        for (let VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.push({ KEY_1: FUNCTION_1() });
        }
        VAR_1.sort((VAR_4, VAR_5) => (VAR_5.KEY_1 || "").localeCompare(VAR_4.KEY_1 || ""))[0];
    }
};