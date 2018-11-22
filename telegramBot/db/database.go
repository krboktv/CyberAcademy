package db

import "./leveldb"

func User(dbName string) (*leveldb.Table) {
	db, err := leveldb.Connect(dbName, 16,16,1024)
	txTable := leveldb.NewTable(db, "user-")
	if err != nil {
		panic(err)
	}
	return txTable
}

func Tx(dbName string) (*leveldb.Table) {
	db, err := leveldb.Connect(dbName, 16,16,1024)
	txTable := leveldb.NewTable(db, "tx-")
	if err != nil {
		panic(err)
	}
	return txTable
}

func TxFrom(dbName string) (*leveldb.Table) {
	db, err := leveldb.Connect(dbName, 16,16,1024)
	txTable := leveldb.NewTable(db, "from-")
	if err != nil {
		panic(err)
	}
	return txTable
}

func TxTo(dbName string) (*leveldb.Table) {
	db, err := leveldb.Connect(dbName, 16,16,1024)
	txTable := leveldb.NewTable(db, "to-")
	if err != nil {
		panic(err)
	}
	return txTable
}