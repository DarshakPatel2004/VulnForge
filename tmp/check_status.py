import sqlite3
con = sqlite3.connect('vuln_tracker.db')
cur = con.cursor()
row = cur.execute('SELECT last_fetched, last_run_status, error_message FROM fetchlog').fetchall()
for r in row:
    print(r)
con.close()
