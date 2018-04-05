"use strict";

const {util} = require("@tilliwilli/sgl");

/** Базовый класс сущностей */
class Entity
{
    GetType(){return this.constructor;}
    GetTypeName(){return this.constructor.name;}
}

/**
 * Фабрика классов
 */
class EntityRegistrar
{
    /**
     * 
     * @param {EntityCore} core ядро сущности
     * @returns {EntityConstructor} сущность (ее конструктор)
     */
    static Register(core){

        EntityRegistrar.ValidateCore(core);

        const EntityGuid = EntityRegistrar.Guid();

        class EntityConstructor extends Entity
        {
            constructor(...args){
                super(...args);
                this._meta = EntityConstructor.CreateMeta(util.Uuid());
            }

            /** @returns {string} guid сущности */
            static get guid(){return EntityGuid;}

            /** @returns {string} guid экземпляра сущности */
            get guid(){return this._meta.guid;}

            /** @returns {EntityMeta} мета информация о экземпляре сущности */
            get meta(){return this._meta;}

            /** @returns {*} данные которые содержит сущность */
            get value(){}

            static CreateMeta(guid){
                const time = util.Now();
                return {
                    ct: time,
                    mt: time,
                    guid: guid,
                }
            }
        }

        return EntityConstructor;
    }

    static IsCoreValid(){return true;}
    
    static ValidateCore(core){
        if(!EntityRegistrar.IsCoreValid(core))
            throw new Error("Неверный формат EntityCore");
    }

    

    static Guid(){return util.Uuid();}

}



/** Выпускатор экземпляров класса Entity */
class EntityEmitter
{

    /** Создает экземпляр сущности
     * @param {EntityConstructor} EntityConstructor конструктор сущности (функция или класс)
     */
    static Emit(EntityConstructor){
        if(typeof(EntityConstructor) !== "function" )
            throw new Error("Неверный формат Сущности");
        return new EntityConstructor();
    }
}

window.Entity = Entity;
window.EntityRegistrar = EntityRegistrar;
window.EntityEmitter = EntityEmitter;

// * @property {Function} InstantiationValidator
// * @property {Function} Validator

/** 
 * @typedef EntityCore
 * @property {*} shape
 * @property {Array<Function>} actions
 * @property {*} validators словарь различных функций валидаторов для Сущности
*/

/**
 * @typedef EntityInstance
 * @property {*} meta
 * @property {*} value
 */

/**
 * @typedef EntityMeta
 * @property {Date} ct время создания сущности
 * @property {Date} mt время последнего изменения сущности
 * @property {Number} epoch количество перерождений сущности
 */