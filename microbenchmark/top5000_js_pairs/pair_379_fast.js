const Benchmark = {
    run: function() {
        const VAR_1 = 1000;
        const FUNCTION_1 = () => parseInt(Math.random() * 100000, 16);
        const VAR_2 = [...Array(VAR_1).keys()].map(FUNCTION_1);
        VAR_2.reduce((VAR_3, VAR_4) => {
          VAR_3.push(VAR_4);
          return VAR_3;
        }, []);
    }
};