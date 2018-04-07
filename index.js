"use strict";

var ProtoExhibit = {

};


var EntityCore = new Entity();//Внутреняя логика функционирования Сущности, только для вунтереннего использования
var EntityPrivateInterface = {
    Bind: function(){},
    
};
var EntityInterface = new EntityInterface(EntityCore);//доступ к сущности только по ее интерфейсу

var EntityInterface.Item = {
    //Геттеры
    guid: <GuidAtom:StringAtom:Atom>,
    title: <StringAtom:Atom>,
    subtitle: <StringAtom:Atom>,
    tags: <AtomList<StringAtom:Atom>>,
    //Действия
};