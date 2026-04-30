const Benchmark = {
    run: function() {
        const FUNCTION_1 = () => {};
        const VAR_3 = true;
        const VAR_4 = false;
        const VAR_5 = true;
        const VAR_6 = [];
        if (VAR_3) {
          VAR_6.push(2);
        }
        if (VAR_4) {
          VAR_6.push(8);
        }
        if (VAR_5) {
          VAR_6.push(3);
        }
        FUNCTION_1(VAR_6);
    }
};