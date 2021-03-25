        var error_count = 1;
        var target_count = 1;

        function validate() {

            var bank_id = document.getElementById("bank_id").value;
            var account_id = document.getElementById("account_id").value;
            if (bank_id != '' && account_id != '') {
                let bank_valid = bank(bank_id);
                if (bank_valid == true) {
                    let account_valid = account(account_id);
                    if (account_valid == "Savings" || account_valid == "Fixed" || account_valid == "Current") {
                        target_table(bank_id, account_valid, account_id.slice(1, (account_id.length)));
                    } else {
                        error_table(bank_id, account_id, account_valid);
                    }
                } else {
                    error_table(bank_id, account_id, bank_valid);
                }
            } else {
                alert("Bank Id and Account Id cannot be Empty")
            }
        }


        function bank(bank_id) {
            if (bank_id.length == 5) {

                var target = bank_id.toUpperCase();
                var f_alpha = target.charAt(0);
                var alpha = (target.slice(1, 6));
                if (f_alpha == target.match(/[A-Z]/i)) {
                    if (alpha == alpha.match(/[0-9]+$/)) {
                        return true;
                    } else {
                        return ("Bank Id Last 4 Characters should be numbers only")
                    }
                } else {
                    return ("Bank Id First Character should be an alphabet");
                }
            } else {
                return ("Invalid Bank Account");
            }
        }


        function account(account_id) {
            if (account_id.length > 8) {

                var target = account_id.toUpperCase();
                var f_alpha = target.charAt(0);
                var alpha = (target.slice(1, (account_id.length)));
                if (f_alpha == target.match(/[SFC]/i)) {
                    if (alpha == alpha.match(/[0-9]+$/)) {
                        if (f_alpha == "S") {
                            return ("Savings");
                        } else if (f_alpha == "F") {
                            return ("Fixed");
                        } else {
                            return ("Current");
                        }
                    } else {
                        return ("Account Id should contain only number except 1st character");
                    }
                } else {
                    return ("Account Type Invalid");
                }
            } else {
                return ("Account ID Length Invalid ");
            }
        }

        function target_table(bank_id, account_valid, account_number) {
            var table = document.getElementById("target");
            var row = table.insertRow(target_count);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = bank_id;
            cell2.innerHTML = account_valid;
            cell3.innerHTML = account_number;
            target_count++;
        }

        function error_table(bank_id, account_id, bank_valid) {
            var table = document.getElementById("error");
            var row = table.insertRow(error_count);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = bank_id;
            cell2.innerHTML = account_id;
            cell3.innerHTML = bank_valid;
            error_count++;
        }