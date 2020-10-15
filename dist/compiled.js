/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gamePackage = (function() {

    /**
     * Namespace gamePackage.
     * @exports gamePackage
     * @namespace
     */
    var gamePackage = {};

    gamePackage.Package = (function() {

        /**
         * Properties of a Package.
         * @memberof gamePackage
         * @interface IPackage
         * @property {gamePackage.IHeader|null} [header] Package header
         * @property {Uint8Array|null} [payload] Package payload
         */

        /**
         * Constructs a new Package.
         * @memberof gamePackage
         * @classdesc Represents a Package.
         * @implements IPackage
         * @constructor
         * @param {gamePackage.IPackage=} [properties] Properties to set
         */
        function Package(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Package header.
         * @member {gamePackage.IHeader|null|undefined} header
         * @memberof gamePackage.Package
         * @instance
         */
        Package.prototype.header = null;

        /**
         * Package payload.
         * @member {Uint8Array} payload
         * @memberof gamePackage.Package
         * @instance
         */
        Package.prototype.payload = $util.newBuffer([]);

        /**
         * Creates a new Package instance using the specified properties.
         * @function create
         * @memberof gamePackage.Package
         * @static
         * @param {gamePackage.IPackage=} [properties] Properties to set
         * @returns {gamePackage.Package} Package instance
         */
        Package.create = function create(properties) {
            return new Package(properties);
        };

        /**
         * Encodes the specified Package message. Does not implicitly {@link gamePackage.Package.verify|verify} messages.
         * @function encode
         * @memberof gamePackage.Package
         * @static
         * @param {gamePackage.IPackage} message Package message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Package.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.gamePackage.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
            return writer;
        };

        /**
         * Encodes the specified Package message, length delimited. Does not implicitly {@link gamePackage.Package.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamePackage.Package
         * @static
         * @param {gamePackage.IPackage} message Package message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Package.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Package message from the specified reader or buffer.
         * @function decode
         * @memberof gamePackage.Package
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamePackage.Package} Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Package.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamePackage.Package();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.gamePackage.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Package message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamePackage.Package
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamePackage.Package} Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Package.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Package message.
         * @function verify
         * @memberof gamePackage.Package
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Package.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                var error = $root.gamePackage.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };

        /**
         * Creates a Package message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamePackage.Package
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamePackage.Package} Package
         */
        Package.fromObject = function fromObject(object) {
            if (object instanceof $root.gamePackage.Package)
                return object;
            var message = new $root.gamePackage.Package();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".gamePackage.Package.header: object expected");
                message.header = $root.gamePackage.Header.fromObject(object.header);
            }
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };

        /**
         * Creates a plain object from a Package message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamePackage.Package
         * @static
         * @param {gamePackage.Package} message Package
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Package.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.header = null;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.gamePackage.Header.toObject(message.header, options);
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };

        /**
         * Converts this Package to JSON.
         * @function toJSON
         * @memberof gamePackage.Package
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Package.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Package;
    })();

    gamePackage.Header = (function() {

        /**
         * Properties of a Header.
         * @memberof gamePackage
         * @interface IHeader
         * @property {gamePackage.EnumMainCommand|null} [type] Header type
         */

        /**
         * Constructs a new Header.
         * @memberof gamePackage
         * @classdesc Represents a Header.
         * @implements IHeader
         * @constructor
         * @param {gamePackage.IHeader=} [properties] Properties to set
         */
        function Header(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Header type.
         * @member {gamePackage.EnumMainCommand} type
         * @memberof gamePackage.Header
         * @instance
         */
        Header.prototype.type = 0;

        /**
         * Creates a new Header instance using the specified properties.
         * @function create
         * @memberof gamePackage.Header
         * @static
         * @param {gamePackage.IHeader=} [properties] Properties to set
         * @returns {gamePackage.Header} Header instance
         */
        Header.create = function create(properties) {
            return new Header(properties);
        };

        /**
         * Encodes the specified Header message. Does not implicitly {@link gamePackage.Header.verify|verify} messages.
         * @function encode
         * @memberof gamePackage.Header
         * @static
         * @param {gamePackage.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link gamePackage.Header.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamePackage.Header
         * @static
         * @param {gamePackage.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @function decode
         * @memberof gamePackage.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamePackage.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamePackage.Header();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamePackage.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamePackage.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Header message.
         * @function verify
         * @memberof gamePackage.Header
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Header.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamePackage.Header
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamePackage.Header} Header
         */
        Header.fromObject = function fromObject(object) {
            if (object instanceof $root.gamePackage.Header)
                return object;
            var message = new $root.gamePackage.Header();
            switch (object.type) {
            case "Unknown":
            case 0:
                message.type = 0;
                break;
            case "SYSTEM":
            case 1:
                message.type = 1;
                break;
            case "GAME":
            case 2:
                message.type = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamePackage.Header
         * @static
         * @param {gamePackage.Header} message Header
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Header.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = options.enums === String ? "Unknown" : 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.gamePackage.EnumMainCommand[message.type] : message.type;
            return object;
        };

        /**
         * Converts this Header to JSON.
         * @function toJSON
         * @memberof gamePackage.Header
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Header.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Header;
    })();

    gamePackage.CommandResult = (function() {

        /**
         * Properties of a CommandResult.
         * @memberof gamePackage
         * @interface ICommandResult
         * @property {gamePackage.ResultCode|null} [resultCode] CommandResult resultCode
         * @property {string|null} [message] CommandResult message
         */

        /**
         * Constructs a new CommandResult.
         * @memberof gamePackage
         * @classdesc Represents a CommandResult.
         * @implements ICommandResult
         * @constructor
         * @param {gamePackage.ICommandResult=} [properties] Properties to set
         */
        function CommandResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommandResult resultCode.
         * @member {gamePackage.ResultCode} resultCode
         * @memberof gamePackage.CommandResult
         * @instance
         */
        CommandResult.prototype.resultCode = 0;

        /**
         * CommandResult message.
         * @member {string} message
         * @memberof gamePackage.CommandResult
         * @instance
         */
        CommandResult.prototype.message = "";

        /**
         * Creates a new CommandResult instance using the specified properties.
         * @function create
         * @memberof gamePackage.CommandResult
         * @static
         * @param {gamePackage.ICommandResult=} [properties] Properties to set
         * @returns {gamePackage.CommandResult} CommandResult instance
         */
        CommandResult.create = function create(properties) {
            return new CommandResult(properties);
        };

        /**
         * Encodes the specified CommandResult message. Does not implicitly {@link gamePackage.CommandResult.verify|verify} messages.
         * @function encode
         * @memberof gamePackage.CommandResult
         * @static
         * @param {gamePackage.ICommandResult} message CommandResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.resultCode != null && Object.hasOwnProperty.call(message, "resultCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultCode);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified CommandResult message, length delimited. Does not implicitly {@link gamePackage.CommandResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamePackage.CommandResult
         * @static
         * @param {gamePackage.ICommandResult} message CommandResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommandResult message from the specified reader or buffer.
         * @function decode
         * @memberof gamePackage.CommandResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamePackage.CommandResult} CommandResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamePackage.CommandResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.resultCode = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommandResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamePackage.CommandResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamePackage.CommandResult} CommandResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommandResult message.
         * @function verify
         * @memberof gamePackage.CommandResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommandResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                switch (message.resultCode) {
                default:
                    return "resultCode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a CommandResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamePackage.CommandResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamePackage.CommandResult} CommandResult
         */
        CommandResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gamePackage.CommandResult)
                return object;
            var message = new $root.gamePackage.CommandResult();
            switch (object.resultCode) {
            case "Unknown":
            case 0:
                message.resultCode = 0;
                break;
            case "Success":
            case 1:
                message.resultCode = 1;
                break;
            case "BadRequest":
            case 2:
                message.resultCode = 2;
                break;
            case "Fail":
            case 3:
                message.resultCode = 3;
                break;
            }
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a CommandResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamePackage.CommandResult
         * @static
         * @param {gamePackage.CommandResult} message CommandResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommandResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.resultCode = options.enums === String ? "Unknown" : 0;
                object.message = "";
            }
            if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                object.resultCode = options.enums === String ? $root.gamePackage.ResultCode[message.resultCode] : message.resultCode;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this CommandResult to JSON.
         * @function toJSON
         * @memberof gamePackage.CommandResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommandResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommandResult;
    })();

    /**
     * EnumMainCommand enum.
     * @name gamePackage.EnumMainCommand
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} SYSTEM=1 SYSTEM value
     * @property {number} GAME=2 GAME value
     */
    gamePackage.EnumMainCommand = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "SYSTEM"] = 1;
        values[valuesById[2] = "GAME"] = 2;
        return values;
    })();

    /**
     * ResultCode enum.
     * @name gamePackage.ResultCode
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} Success=1 Success value
     * @property {number} BadRequest=2 BadRequest value
     * @property {number} Fail=3 Fail value
     */
    gamePackage.ResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "Success"] = 1;
        values[valuesById[2] = "BadRequest"] = 2;
        values[valuesById[3] = "Fail"] = 3;
        return values;
    })();

    /**
     * ErrorCode enum.
     * @name gamePackage.ErrorCode
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} OverMaxBet=1 OverMaxBet value
     * @property {number} BalanceNotEnough=2 BalanceNotEnough value
     * @property {number} TableWillClose=3 TableWillClose value
     */
    gamePackage.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "OverMaxBet"] = 1;
        values[valuesById[2] = "BalanceNotEnough"] = 2;
        values[valuesById[3] = "TableWillClose"] = 3;
        return values;
    })();

    return gamePackage;
})();

$root.systemProto = (function() {

    /**
     * Namespace systemProto.
     * @exports systemProto
     * @namespace
     */
    var systemProto = {};

    systemProto.CommandPackage = (function() {

        /**
         * Properties of a CommandPackage.
         * @memberof systemProto
         * @interface ICommandPackage
         * @property {systemProto.EnumCommand|null} [command] CommandPackage command
         * @property {Uint8Array|null} [body] CommandPackage body
         */

        /**
         * Constructs a new CommandPackage.
         * @memberof systemProto
         * @classdesc Represents a CommandPackage.
         * @implements ICommandPackage
         * @constructor
         * @param {systemProto.ICommandPackage=} [properties] Properties to set
         */
        function CommandPackage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommandPackage command.
         * @member {systemProto.EnumCommand} command
         * @memberof systemProto.CommandPackage
         * @instance
         */
        CommandPackage.prototype.command = 0;

        /**
         * CommandPackage body.
         * @member {Uint8Array} body
         * @memberof systemProto.CommandPackage
         * @instance
         */
        CommandPackage.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new CommandPackage instance using the specified properties.
         * @function create
         * @memberof systemProto.CommandPackage
         * @static
         * @param {systemProto.ICommandPackage=} [properties] Properties to set
         * @returns {systemProto.CommandPackage} CommandPackage instance
         */
        CommandPackage.create = function create(properties) {
            return new CommandPackage(properties);
        };

        /**
         * Encodes the specified CommandPackage message. Does not implicitly {@link systemProto.CommandPackage.verify|verify} messages.
         * @function encode
         * @memberof systemProto.CommandPackage
         * @static
         * @param {systemProto.ICommandPackage} message CommandPackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandPackage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.command);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified CommandPackage message, length delimited. Does not implicitly {@link systemProto.CommandPackage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof systemProto.CommandPackage
         * @static
         * @param {systemProto.ICommandPackage} message CommandPackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandPackage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommandPackage message from the specified reader or buffer.
         * @function decode
         * @memberof systemProto.CommandPackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {systemProto.CommandPackage} CommandPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandPackage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.systemProto.CommandPackage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.command = reader.int32();
                    break;
                case 2:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommandPackage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof systemProto.CommandPackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {systemProto.CommandPackage} CommandPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandPackage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommandPackage message.
         * @function verify
         * @memberof systemProto.CommandPackage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommandPackage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                switch (message.command) {
                default:
                    return "command: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 101:
                case 102:
                    break;
                }
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };

        /**
         * Creates a CommandPackage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof systemProto.CommandPackage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {systemProto.CommandPackage} CommandPackage
         */
        CommandPackage.fromObject = function fromObject(object) {
            if (object instanceof $root.systemProto.CommandPackage)
                return object;
            var message = new $root.systemProto.CommandPackage();
            switch (object.command) {
            case "Unknown":
            case 0:
                message.command = 0;
                break;
            case "EnterRoomReq":
            case 1:
                message.command = 1;
                break;
            case "EnterRoomResp":
            case 2:
                message.command = 2;
                break;
            case "HeartBeatReq":
            case 3:
                message.command = 3;
                break;
            case "HeartBeatResp":
            case 4:
                message.command = 4;
                break;
            case "GetBalanceReq":
            case 5:
                message.command = 5;
                break;
            case "GetBalanceResp":
            case 6:
                message.command = 6;
                break;
            case "Disconnect":
            case 101:
                message.command = 101;
                break;
            case "Welcome":
            case 102:
                message.command = 102;
                break;
            }
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from a CommandPackage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof systemProto.CommandPackage
         * @static
         * @param {systemProto.CommandPackage} message CommandPackage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommandPackage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.command = options.enums === String ? "Unknown" : 0;
                if (options.bytes === String)
                    object.body = "";
                else {
                    object.body = [];
                    if (options.bytes !== Array)
                        object.body = $util.newBuffer(object.body);
                }
            }
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = options.enums === String ? $root.systemProto.EnumCommand[message.command] : message.command;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this CommandPackage to JSON.
         * @function toJSON
         * @memberof systemProto.CommandPackage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommandPackage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommandPackage;
    })();

    /**
     * EnumCommand enum.
     * @name systemProto.EnumCommand
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} EnterRoomReq=1 EnterRoomReq value
     * @property {number} EnterRoomResp=2 EnterRoomResp value
     * @property {number} HeartBeatReq=3 HeartBeatReq value
     * @property {number} HeartBeatResp=4 HeartBeatResp value
     * @property {number} GetBalanceReq=5 GetBalanceReq value
     * @property {number} GetBalanceResp=6 GetBalanceResp value
     * @property {number} Disconnect=101 Disconnect value
     * @property {number} Welcome=102 Welcome value
     */
    systemProto.EnumCommand = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "EnterRoomReq"] = 1;
        values[valuesById[2] = "EnterRoomResp"] = 2;
        values[valuesById[3] = "HeartBeatReq"] = 3;
        values[valuesById[4] = "HeartBeatResp"] = 4;
        values[valuesById[5] = "GetBalanceReq"] = 5;
        values[valuesById[6] = "GetBalanceResp"] = 6;
        values[valuesById[101] = "Disconnect"] = 101;
        values[valuesById[102] = "Welcome"] = 102;
        return values;
    })();

    systemProto.EnterRoomReq = (function() {

        /**
         * Properties of an EnterRoomReq.
         * @memberof systemProto
         * @interface IEnterRoomReq
         * @property {string|null} [tableId] EnterRoomReq tableId
         */

        /**
         * Constructs a new EnterRoomReq.
         * @memberof systemProto
         * @classdesc Represents an EnterRoomReq.
         * @implements IEnterRoomReq
         * @constructor
         * @param {systemProto.IEnterRoomReq=} [properties] Properties to set
         */
        function EnterRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomReq tableId.
         * @member {string} tableId
         * @memberof systemProto.EnterRoomReq
         * @instance
         */
        EnterRoomReq.prototype.tableId = "";

        /**
         * Creates a new EnterRoomReq instance using the specified properties.
         * @function create
         * @memberof systemProto.EnterRoomReq
         * @static
         * @param {systemProto.IEnterRoomReq=} [properties] Properties to set
         * @returns {systemProto.EnterRoomReq} EnterRoomReq instance
         */
        EnterRoomReq.create = function create(properties) {
            return new EnterRoomReq(properties);
        };

        /**
         * Encodes the specified EnterRoomReq message. Does not implicitly {@link systemProto.EnterRoomReq.verify|verify} messages.
         * @function encode
         * @memberof systemProto.EnterRoomReq
         * @static
         * @param {systemProto.IEnterRoomReq} message EnterRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && Object.hasOwnProperty.call(message, "tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomReq message, length delimited. Does not implicitly {@link systemProto.EnterRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof systemProto.EnterRoomReq
         * @static
         * @param {systemProto.IEnterRoomReq} message EnterRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof systemProto.EnterRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {systemProto.EnterRoomReq} EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.systemProto.EnterRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof systemProto.EnterRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {systemProto.EnterRoomReq} EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomReq message.
         * @function verify
         * @memberof systemProto.EnterRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            return null;
        };

        /**
         * Creates an EnterRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof systemProto.EnterRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {systemProto.EnterRoomReq} EnterRoomReq
         */
        EnterRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.systemProto.EnterRoomReq)
                return object;
            var message = new $root.systemProto.EnterRoomReq();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof systemProto.EnterRoomReq
         * @static
         * @param {systemProto.EnterRoomReq} message EnterRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.tableId = "";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            return object;
        };

        /**
         * Converts this EnterRoomReq to JSON.
         * @function toJSON
         * @memberof systemProto.EnterRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomReq;
    })();

    systemProto.EnterRoomResp = (function() {

        /**
         * Properties of an EnterRoomResp.
         * @memberof systemProto
         * @interface IEnterRoomResp
         * @property {gamePackage.ICommandResult|null} [result] EnterRoomResp result
         */

        /**
         * Constructs a new EnterRoomResp.
         * @memberof systemProto
         * @classdesc Represents an EnterRoomResp.
         * @implements IEnterRoomResp
         * @constructor
         * @param {systemProto.IEnterRoomResp=} [properties] Properties to set
         */
        function EnterRoomResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomResp result.
         * @member {gamePackage.ICommandResult|null|undefined} result
         * @memberof systemProto.EnterRoomResp
         * @instance
         */
        EnterRoomResp.prototype.result = null;

        /**
         * Creates a new EnterRoomResp instance using the specified properties.
         * @function create
         * @memberof systemProto.EnterRoomResp
         * @static
         * @param {systemProto.IEnterRoomResp=} [properties] Properties to set
         * @returns {systemProto.EnterRoomResp} EnterRoomResp instance
         */
        EnterRoomResp.create = function create(properties) {
            return new EnterRoomResp(properties);
        };

        /**
         * Encodes the specified EnterRoomResp message. Does not implicitly {@link systemProto.EnterRoomResp.verify|verify} messages.
         * @function encode
         * @memberof systemProto.EnterRoomResp
         * @static
         * @param {systemProto.IEnterRoomResp} message EnterRoomResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                $root.gamePackage.CommandResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterRoomResp message, length delimited. Does not implicitly {@link systemProto.EnterRoomResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof systemProto.EnterRoomResp
         * @static
         * @param {systemProto.IEnterRoomResp} message EnterRoomResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomResp message from the specified reader or buffer.
         * @function decode
         * @memberof systemProto.EnterRoomResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {systemProto.EnterRoomResp} EnterRoomResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.systemProto.EnterRoomResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.gamePackage.CommandResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof systemProto.EnterRoomResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {systemProto.EnterRoomResp} EnterRoomResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomResp message.
         * @function verify
         * @memberof systemProto.EnterRoomResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.gamePackage.CommandResult.verify(message.result);
                if (error)
                    return "result." + error;
            }
            return null;
        };

        /**
         * Creates an EnterRoomResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof systemProto.EnterRoomResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {systemProto.EnterRoomResp} EnterRoomResp
         */
        EnterRoomResp.fromObject = function fromObject(object) {
            if (object instanceof $root.systemProto.EnterRoomResp)
                return object;
            var message = new $root.systemProto.EnterRoomResp();
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".systemProto.EnterRoomResp.result: object expected");
                message.result = $root.gamePackage.CommandResult.fromObject(object.result);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof systemProto.EnterRoomResp
         * @static
         * @param {systemProto.EnterRoomResp} message EnterRoomResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = null;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.gamePackage.CommandResult.toObject(message.result, options);
            return object;
        };

        /**
         * Converts this EnterRoomResp to JSON.
         * @function toJSON
         * @memberof systemProto.EnterRoomResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomResp;
    })();

    systemProto.HeartBeatReq = (function() {

        /**
         * Properties of a HeartBeatReq.
         * @memberof systemProto
         * @interface IHeartBeatReq
         * @property {boolean|null} [heart] HeartBeatReq heart
         */

        /**
         * Constructs a new HeartBeatReq.
         * @memberof systemProto
         * @classdesc Represents a HeartBeatReq.
         * @implements IHeartBeatReq
         * @constructor
         * @param {systemProto.IHeartBeatReq=} [properties] Properties to set
         */
        function HeartBeatReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatReq heart.
         * @member {boolean} heart
         * @memberof systemProto.HeartBeatReq
         * @instance
         */
        HeartBeatReq.prototype.heart = false;

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @function create
         * @memberof systemProto.HeartBeatReq
         * @static
         * @param {systemProto.IHeartBeatReq=} [properties] Properties to set
         * @returns {systemProto.HeartBeatReq} HeartBeatReq instance
         */
        HeartBeatReq.create = function create(properties) {
            return new HeartBeatReq(properties);
        };

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link systemProto.HeartBeatReq.verify|verify} messages.
         * @function encode
         * @memberof systemProto.HeartBeatReq
         * @static
         * @param {systemProto.IHeartBeatReq} message HeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heart != null && Object.hasOwnProperty.call(message, "heart"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.heart);
            return writer;
        };

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link systemProto.HeartBeatReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof systemProto.HeartBeatReq
         * @static
         * @param {systemProto.IHeartBeatReq} message HeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @function decode
         * @memberof systemProto.HeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {systemProto.HeartBeatReq} HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.systemProto.HeartBeatReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heart = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof systemProto.HeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {systemProto.HeartBeatReq} HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatReq message.
         * @function verify
         * @memberof systemProto.HeartBeatReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.heart != null && message.hasOwnProperty("heart"))
                if (typeof message.heart !== "boolean")
                    return "heart: boolean expected";
            return null;
        };

        /**
         * Creates a HeartBeatReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof systemProto.HeartBeatReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {systemProto.HeartBeatReq} HeartBeatReq
         */
        HeartBeatReq.fromObject = function fromObject(object) {
            if (object instanceof $root.systemProto.HeartBeatReq)
                return object;
            var message = new $root.systemProto.HeartBeatReq();
            if (object.heart != null)
                message.heart = Boolean(object.heart);
            return message;
        };

        /**
         * Creates a plain object from a HeartBeatReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof systemProto.HeartBeatReq
         * @static
         * @param {systemProto.HeartBeatReq} message HeartBeatReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartBeatReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.heart = false;
            if (message.heart != null && message.hasOwnProperty("heart"))
                object.heart = message.heart;
            return object;
        };

        /**
         * Converts this HeartBeatReq to JSON.
         * @function toJSON
         * @memberof systemProto.HeartBeatReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartBeatReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartBeatReq;
    })();

    systemProto.HeartBeatResp = (function() {

        /**
         * Properties of a HeartBeatResp.
         * @memberof systemProto
         * @interface IHeartBeatResp
         * @property {gamePackage.ICommandResult|null} [result] HeartBeatResp result
         */

        /**
         * Constructs a new HeartBeatResp.
         * @memberof systemProto
         * @classdesc Represents a HeartBeatResp.
         * @implements IHeartBeatResp
         * @constructor
         * @param {systemProto.IHeartBeatResp=} [properties] Properties to set
         */
        function HeartBeatResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatResp result.
         * @member {gamePackage.ICommandResult|null|undefined} result
         * @memberof systemProto.HeartBeatResp
         * @instance
         */
        HeartBeatResp.prototype.result = null;

        /**
         * Creates a new HeartBeatResp instance using the specified properties.
         * @function create
         * @memberof systemProto.HeartBeatResp
         * @static
         * @param {systemProto.IHeartBeatResp=} [properties] Properties to set
         * @returns {systemProto.HeartBeatResp} HeartBeatResp instance
         */
        HeartBeatResp.create = function create(properties) {
            return new HeartBeatResp(properties);
        };

        /**
         * Encodes the specified HeartBeatResp message. Does not implicitly {@link systemProto.HeartBeatResp.verify|verify} messages.
         * @function encode
         * @memberof systemProto.HeartBeatResp
         * @static
         * @param {systemProto.IHeartBeatResp} message HeartBeatResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                $root.gamePackage.CommandResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeartBeatResp message, length delimited. Does not implicitly {@link systemProto.HeartBeatResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof systemProto.HeartBeatResp
         * @static
         * @param {systemProto.IHeartBeatResp} message HeartBeatResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatResp message from the specified reader or buffer.
         * @function decode
         * @memberof systemProto.HeartBeatResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {systemProto.HeartBeatResp} HeartBeatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.systemProto.HeartBeatResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.gamePackage.CommandResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartBeatResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof systemProto.HeartBeatResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {systemProto.HeartBeatResp} HeartBeatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatResp message.
         * @function verify
         * @memberof systemProto.HeartBeatResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.gamePackage.CommandResult.verify(message.result);
                if (error)
                    return "result." + error;
            }
            return null;
        };

        /**
         * Creates a HeartBeatResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof systemProto.HeartBeatResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {systemProto.HeartBeatResp} HeartBeatResp
         */
        HeartBeatResp.fromObject = function fromObject(object) {
            if (object instanceof $root.systemProto.HeartBeatResp)
                return object;
            var message = new $root.systemProto.HeartBeatResp();
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".systemProto.HeartBeatResp.result: object expected");
                message.result = $root.gamePackage.CommandResult.fromObject(object.result);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeartBeatResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof systemProto.HeartBeatResp
         * @static
         * @param {systemProto.HeartBeatResp} message HeartBeatResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartBeatResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = null;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.gamePackage.CommandResult.toObject(message.result, options);
            return object;
        };

        /**
         * Converts this HeartBeatResp to JSON.
         * @function toJSON
         * @memberof systemProto.HeartBeatResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartBeatResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartBeatResp;
    })();

    systemProto.GetBalanceReq = (function() {

        /**
         * Properties of a GetBalanceReq.
         * @memberof systemProto
         * @interface IGetBalanceReq
         */

        /**
         * Constructs a new GetBalanceReq.
         * @memberof systemProto
         * @classdesc Represents a GetBalanceReq.
         * @implements IGetBalanceReq
         * @constructor
         * @param {systemProto.IGetBalanceReq=} [properties] Properties to set
         */
        function GetBalanceReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetBalanceReq instance using the specified properties.
         * @function create
         * @memberof systemProto.GetBalanceReq
         * @static
         * @param {systemProto.IGetBalanceReq=} [properties] Properties to set
         * @returns {systemProto.GetBalanceReq} GetBalanceReq instance
         */
        GetBalanceReq.create = function create(properties) {
            return new GetBalanceReq(properties);
        };

        /**
         * Encodes the specified GetBalanceReq message. Does not implicitly {@link systemProto.GetBalanceReq.verify|verify} messages.
         * @function encode
         * @memberof systemProto.GetBalanceReq
         * @static
         * @param {systemProto.IGetBalanceReq} message GetBalanceReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBalanceReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetBalanceReq message, length delimited. Does not implicitly {@link systemProto.GetBalanceReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof systemProto.GetBalanceReq
         * @static
         * @param {systemProto.IGetBalanceReq} message GetBalanceReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBalanceReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetBalanceReq message from the specified reader or buffer.
         * @function decode
         * @memberof systemProto.GetBalanceReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {systemProto.GetBalanceReq} GetBalanceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBalanceReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.systemProto.GetBalanceReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetBalanceReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof systemProto.GetBalanceReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {systemProto.GetBalanceReq} GetBalanceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBalanceReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetBalanceReq message.
         * @function verify
         * @memberof systemProto.GetBalanceReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetBalanceReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetBalanceReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof systemProto.GetBalanceReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {systemProto.GetBalanceReq} GetBalanceReq
         */
        GetBalanceReq.fromObject = function fromObject(object) {
            if (object instanceof $root.systemProto.GetBalanceReq)
                return object;
            return new $root.systemProto.GetBalanceReq();
        };

        /**
         * Creates a plain object from a GetBalanceReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof systemProto.GetBalanceReq
         * @static
         * @param {systemProto.GetBalanceReq} message GetBalanceReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetBalanceReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetBalanceReq to JSON.
         * @function toJSON
         * @memberof systemProto.GetBalanceReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetBalanceReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetBalanceReq;
    })();

    systemProto.GetBalanceResp = (function() {

        /**
         * Properties of a GetBalanceResp.
         * @memberof systemProto
         * @interface IGetBalanceResp
         * @property {gamePackage.ICommandResult|null} [result] GetBalanceResp result
         * @property {number|Long|null} [balance] GetBalanceResp balance
         */

        /**
         * Constructs a new GetBalanceResp.
         * @memberof systemProto
         * @classdesc Represents a GetBalanceResp.
         * @implements IGetBalanceResp
         * @constructor
         * @param {systemProto.IGetBalanceResp=} [properties] Properties to set
         */
        function GetBalanceResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetBalanceResp result.
         * @member {gamePackage.ICommandResult|null|undefined} result
         * @memberof systemProto.GetBalanceResp
         * @instance
         */
        GetBalanceResp.prototype.result = null;

        /**
         * GetBalanceResp balance.
         * @member {number|Long} balance
         * @memberof systemProto.GetBalanceResp
         * @instance
         */
        GetBalanceResp.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new GetBalanceResp instance using the specified properties.
         * @function create
         * @memberof systemProto.GetBalanceResp
         * @static
         * @param {systemProto.IGetBalanceResp=} [properties] Properties to set
         * @returns {systemProto.GetBalanceResp} GetBalanceResp instance
         */
        GetBalanceResp.create = function create(properties) {
            return new GetBalanceResp(properties);
        };

        /**
         * Encodes the specified GetBalanceResp message. Does not implicitly {@link systemProto.GetBalanceResp.verify|verify} messages.
         * @function encode
         * @memberof systemProto.GetBalanceResp
         * @static
         * @param {systemProto.IGetBalanceResp} message GetBalanceResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBalanceResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                $root.gamePackage.CommandResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.balance);
            return writer;
        };

        /**
         * Encodes the specified GetBalanceResp message, length delimited. Does not implicitly {@link systemProto.GetBalanceResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof systemProto.GetBalanceResp
         * @static
         * @param {systemProto.IGetBalanceResp} message GetBalanceResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBalanceResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetBalanceResp message from the specified reader or buffer.
         * @function decode
         * @memberof systemProto.GetBalanceResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {systemProto.GetBalanceResp} GetBalanceResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBalanceResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.systemProto.GetBalanceResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.gamePackage.CommandResult.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetBalanceResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof systemProto.GetBalanceResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {systemProto.GetBalanceResp} GetBalanceResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBalanceResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetBalanceResp message.
         * @function verify
         * @memberof systemProto.GetBalanceResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetBalanceResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.gamePackage.CommandResult.verify(message.result);
                if (error)
                    return "result." + error;
            }
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetBalanceResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof systemProto.GetBalanceResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {systemProto.GetBalanceResp} GetBalanceResp
         */
        GetBalanceResp.fromObject = function fromObject(object) {
            if (object instanceof $root.systemProto.GetBalanceResp)
                return object;
            var message = new $root.systemProto.GetBalanceResp();
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".systemProto.GetBalanceResp.result: object expected");
                message.result = $root.gamePackage.CommandResult.fromObject(object.result);
            }
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = true;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a GetBalanceResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof systemProto.GetBalanceResp
         * @static
         * @param {systemProto.GetBalanceResp} message GetBalanceResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetBalanceResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.gamePackage.CommandResult.toObject(message.result, options);
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber(true) : message.balance;
            return object;
        };

        /**
         * Converts this GetBalanceResp to JSON.
         * @function toJSON
         * @memberof systemProto.GetBalanceResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetBalanceResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetBalanceResp;
    })();

    systemProto.Disconnect = (function() {

        /**
         * Properties of a Disconnect.
         * @memberof systemProto
         * @interface IDisconnect
         * @property {systemProto.Disconnect.Code|null} [reasonCode] Disconnect reasonCode
         * @property {string|null} [message] Disconnect message
         */

        /**
         * Constructs a new Disconnect.
         * @memberof systemProto
         * @classdesc Represents a Disconnect.
         * @implements IDisconnect
         * @constructor
         * @param {systemProto.IDisconnect=} [properties] Properties to set
         */
        function Disconnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Disconnect reasonCode.
         * @member {systemProto.Disconnect.Code} reasonCode
         * @memberof systemProto.Disconnect
         * @instance
         */
        Disconnect.prototype.reasonCode = 0;

        /**
         * Disconnect message.
         * @member {string} message
         * @memberof systemProto.Disconnect
         * @instance
         */
        Disconnect.prototype.message = "";

        /**
         * Creates a new Disconnect instance using the specified properties.
         * @function create
         * @memberof systemProto.Disconnect
         * @static
         * @param {systemProto.IDisconnect=} [properties] Properties to set
         * @returns {systemProto.Disconnect} Disconnect instance
         */
        Disconnect.create = function create(properties) {
            return new Disconnect(properties);
        };

        /**
         * Encodes the specified Disconnect message. Does not implicitly {@link systemProto.Disconnect.verify|verify} messages.
         * @function encode
         * @memberof systemProto.Disconnect
         * @static
         * @param {systemProto.IDisconnect} message Disconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Disconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reasonCode != null && Object.hasOwnProperty.call(message, "reasonCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reasonCode);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified Disconnect message, length delimited. Does not implicitly {@link systemProto.Disconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof systemProto.Disconnect
         * @static
         * @param {systemProto.IDisconnect} message Disconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Disconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Disconnect message from the specified reader or buffer.
         * @function decode
         * @memberof systemProto.Disconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {systemProto.Disconnect} Disconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Disconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.systemProto.Disconnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reasonCode = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Disconnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof systemProto.Disconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {systemProto.Disconnect} Disconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Disconnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Disconnect message.
         * @function verify
         * @memberof systemProto.Disconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Disconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reasonCode != null && message.hasOwnProperty("reasonCode"))
                switch (message.reasonCode) {
                default:
                    return "reasonCode: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a Disconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof systemProto.Disconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {systemProto.Disconnect} Disconnect
         */
        Disconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.systemProto.Disconnect)
                return object;
            var message = new $root.systemProto.Disconnect();
            switch (object.reasonCode) {
            case "Unknown":
            case 0:
                message.reasonCode = 0;
                break;
            case "KickOff":
            case 1:
                message.reasonCode = 1;
                break;
            case "ReLogin":
            case 2:
                message.reasonCode = 2;
                break;
            }
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a Disconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof systemProto.Disconnect
         * @static
         * @param {systemProto.Disconnect} message Disconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Disconnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reasonCode = options.enums === String ? "Unknown" : 0;
                object.message = "";
            }
            if (message.reasonCode != null && message.hasOwnProperty("reasonCode"))
                object.reasonCode = options.enums === String ? $root.systemProto.Disconnect.Code[message.reasonCode] : message.reasonCode;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this Disconnect to JSON.
         * @function toJSON
         * @memberof systemProto.Disconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Disconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Code enum.
         * @name systemProto.Disconnect.Code
         * @enum {number}
         * @property {number} Unknown=0 Unknown value
         * @property {number} KickOff=1 KickOff value
         * @property {number} ReLogin=2 ReLogin value
         */
        Disconnect.Code = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Unknown"] = 0;
            values[valuesById[1] = "KickOff"] = 1;
            values[valuesById[2] = "ReLogin"] = 2;
            return values;
        })();

        return Disconnect;
    })();

    systemProto.Welcome = (function() {

        /**
         * Properties of a Welcome.
         * @memberof systemProto
         * @interface IWelcome
         * @property {number|null} [id] Welcome id
         * @property {number|Long|null} [balance] Welcome balance
         * @property {string|null} [name] Welcome name
         * @property {number|null} [floatDigits] Welcome floatDigits
         */

        /**
         * Constructs a new Welcome.
         * @memberof systemProto
         * @classdesc Represents a Welcome.
         * @implements IWelcome
         * @constructor
         * @param {systemProto.IWelcome=} [properties] Properties to set
         */
        function Welcome(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Welcome id.
         * @member {number} id
         * @memberof systemProto.Welcome
         * @instance
         */
        Welcome.prototype.id = 0;

        /**
         * Welcome balance.
         * @member {number|Long} balance
         * @memberof systemProto.Welcome
         * @instance
         */
        Welcome.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Welcome name.
         * @member {string} name
         * @memberof systemProto.Welcome
         * @instance
         */
        Welcome.prototype.name = "";

        /**
         * Welcome floatDigits.
         * @member {number} floatDigits
         * @memberof systemProto.Welcome
         * @instance
         */
        Welcome.prototype.floatDigits = 0;

        /**
         * Creates a new Welcome instance using the specified properties.
         * @function create
         * @memberof systemProto.Welcome
         * @static
         * @param {systemProto.IWelcome=} [properties] Properties to set
         * @returns {systemProto.Welcome} Welcome instance
         */
        Welcome.create = function create(properties) {
            return new Welcome(properties);
        };

        /**
         * Encodes the specified Welcome message. Does not implicitly {@link systemProto.Welcome.verify|verify} messages.
         * @function encode
         * @memberof systemProto.Welcome
         * @static
         * @param {systemProto.IWelcome} message Welcome message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Welcome.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.balance);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.floatDigits != null && Object.hasOwnProperty.call(message, "floatDigits"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.floatDigits);
            return writer;
        };

        /**
         * Encodes the specified Welcome message, length delimited. Does not implicitly {@link systemProto.Welcome.verify|verify} messages.
         * @function encodeDelimited
         * @memberof systemProto.Welcome
         * @static
         * @param {systemProto.IWelcome} message Welcome message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Welcome.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Welcome message from the specified reader or buffer.
         * @function decode
         * @memberof systemProto.Welcome
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {systemProto.Welcome} Welcome
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Welcome.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.systemProto.Welcome();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.balance = reader.uint64();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.floatDigits = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Welcome message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof systemProto.Welcome
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {systemProto.Welcome} Welcome
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Welcome.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Welcome message.
         * @function verify
         * @memberof systemProto.Welcome
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Welcome.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.floatDigits != null && message.hasOwnProperty("floatDigits"))
                if (!$util.isInteger(message.floatDigits))
                    return "floatDigits: integer expected";
            return null;
        };

        /**
         * Creates a Welcome message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof systemProto.Welcome
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {systemProto.Welcome} Welcome
         */
        Welcome.fromObject = function fromObject(object) {
            if (object instanceof $root.systemProto.Welcome)
                return object;
            var message = new $root.systemProto.Welcome();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = true;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber(true);
            if (object.name != null)
                message.name = String(object.name);
            if (object.floatDigits != null)
                message.floatDigits = object.floatDigits >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Welcome message. Also converts values to other types if specified.
         * @function toObject
         * @memberof systemProto.Welcome
         * @static
         * @param {systemProto.Welcome} message Welcome
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Welcome.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
                object.name = "";
                object.floatDigits = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber(true) : message.balance;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.floatDigits != null && message.hasOwnProperty("floatDigits"))
                object.floatDigits = message.floatDigits;
            return object;
        };

        /**
         * Converts this Welcome to JSON.
         * @function toJSON
         * @memberof systemProto.Welcome
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Welcome.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Welcome;
    })();

    return systemProto;
})();

$root.dragontigerProto = (function() {

    /**
     * Namespace dragontigerProto.
     * @exports dragontigerProto
     * @namespace
     */
    var dragontigerProto = {};

    dragontigerProto.CommandPackage = (function() {

        /**
         * Properties of a CommandPackage.
         * @memberof dragontigerProto
         * @interface ICommandPackage
         * @property {dragontigerProto.EnumCommand|null} [command] CommandPackage command
         * @property {Uint8Array|null} [body] CommandPackage body
         */

        /**
         * Constructs a new CommandPackage.
         * @memberof dragontigerProto
         * @classdesc Represents a CommandPackage.
         * @implements ICommandPackage
         * @constructor
         * @param {dragontigerProto.ICommandPackage=} [properties] Properties to set
         */
        function CommandPackage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommandPackage command.
         * @member {dragontigerProto.EnumCommand} command
         * @memberof dragontigerProto.CommandPackage
         * @instance
         */
        CommandPackage.prototype.command = 0;

        /**
         * CommandPackage body.
         * @member {Uint8Array} body
         * @memberof dragontigerProto.CommandPackage
         * @instance
         */
        CommandPackage.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new CommandPackage instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.CommandPackage
         * @static
         * @param {dragontigerProto.ICommandPackage=} [properties] Properties to set
         * @returns {dragontigerProto.CommandPackage} CommandPackage instance
         */
        CommandPackage.create = function create(properties) {
            return new CommandPackage(properties);
        };

        /**
         * Encodes the specified CommandPackage message. Does not implicitly {@link dragontigerProto.CommandPackage.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.CommandPackage
         * @static
         * @param {dragontigerProto.ICommandPackage} message CommandPackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandPackage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.command);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified CommandPackage message, length delimited. Does not implicitly {@link dragontigerProto.CommandPackage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.CommandPackage
         * @static
         * @param {dragontigerProto.ICommandPackage} message CommandPackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandPackage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommandPackage message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.CommandPackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.CommandPackage} CommandPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandPackage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.CommandPackage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.command = reader.int32();
                    break;
                case 2:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommandPackage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.CommandPackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.CommandPackage} CommandPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandPackage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommandPackage message.
         * @function verify
         * @memberof dragontigerProto.CommandPackage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommandPackage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                switch (message.command) {
                default:
                    return "command: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                    break;
                }
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };

        /**
         * Creates a CommandPackage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.CommandPackage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.CommandPackage} CommandPackage
         */
        CommandPackage.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.CommandPackage)
                return object;
            var message = new $root.dragontigerProto.CommandPackage();
            switch (object.command) {
            case "Unknown":
            case 0:
                message.command = 0;
                break;
            case "GameStart":
            case 1:
                message.command = 1;
                break;
            case "GameBet":
            case 2:
                message.command = 2;
                break;
            case "GameAward":
            case 3:
                message.command = 3;
                break;
            case "AreaBetAmount":
            case 4:
                message.command = 4;
                break;
            case "UserBetReq":
            case 101:
                message.command = 101;
                break;
            case "UserBetResp":
            case 102:
                message.command = 102;
                break;
            case "GameStatusReq":
            case 103:
                message.command = 103;
                break;
            case "GameStatusResp":
            case 104:
                message.command = 104;
                break;
            case "UserExitReq":
            case 105:
                message.command = 105;
                break;
            case "UserExitResp":
            case 106:
                message.command = 106;
                break;
            case "RoomInfoReq":
            case 107:
                message.command = 107;
                break;
            case "RoomInfoResp":
            case 108:
                message.command = 108;
                break;
            }
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from a CommandPackage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.CommandPackage
         * @static
         * @param {dragontigerProto.CommandPackage} message CommandPackage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommandPackage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.command = options.enums === String ? "Unknown" : 0;
                if (options.bytes === String)
                    object.body = "";
                else {
                    object.body = [];
                    if (options.bytes !== Array)
                        object.body = $util.newBuffer(object.body);
                }
            }
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = options.enums === String ? $root.dragontigerProto.EnumCommand[message.command] : message.command;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this CommandPackage to JSON.
         * @function toJSON
         * @memberof dragontigerProto.CommandPackage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommandPackage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommandPackage;
    })();

    /**
     * EnumCommand enum.
     * @name dragontigerProto.EnumCommand
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} GameStart=1 GameStart value
     * @property {number} GameBet=2 GameBet value
     * @property {number} GameAward=3 GameAward value
     * @property {number} AreaBetAmount=4 AreaBetAmount value
     * @property {number} UserBetReq=101 UserBetReq value
     * @property {number} UserBetResp=102 UserBetResp value
     * @property {number} GameStatusReq=103 GameStatusReq value
     * @property {number} GameStatusResp=104 GameStatusResp value
     * @property {number} UserExitReq=105 UserExitReq value
     * @property {number} UserExitResp=106 UserExitResp value
     * @property {number} RoomInfoReq=107 RoomInfoReq value
     * @property {number} RoomInfoResp=108 RoomInfoResp value
     */
    dragontigerProto.EnumCommand = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "GameStart"] = 1;
        values[valuesById[2] = "GameBet"] = 2;
        values[valuesById[3] = "GameAward"] = 3;
        values[valuesById[4] = "AreaBetAmount"] = 4;
        values[valuesById[101] = "UserBetReq"] = 101;
        values[valuesById[102] = "UserBetResp"] = 102;
        values[valuesById[103] = "GameStatusReq"] = 103;
        values[valuesById[104] = "GameStatusResp"] = 104;
        values[valuesById[105] = "UserExitReq"] = 105;
        values[valuesById[106] = "UserExitResp"] = 106;
        values[valuesById[107] = "RoomInfoReq"] = 107;
        values[valuesById[108] = "RoomInfoResp"] = 108;
        return values;
    })();

    /**
     * EnumPokeSuit enum.
     * @name dragontigerProto.EnumPokeSuit
     * @enum {number}
     * @property {number} unknown=0 unknown value
     * @property {number} diamond=1 diamond value
     * @property {number} club=2 club value
     * @property {number} heart=3 heart value
     * @property {number} spade=4 spade value
     * @property {number} ghost=5 ghost value
     */
    dragontigerProto.EnumPokeSuit = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "unknown"] = 0;
        values[valuesById[1] = "diamond"] = 1;
        values[valuesById[2] = "club"] = 2;
        values[valuesById[3] = "heart"] = 3;
        values[valuesById[4] = "spade"] = 4;
        values[valuesById[5] = "ghost"] = 5;
        return values;
    })();

    /**
     * EnumGameStatus enum.
     * @name dragontigerProto.EnumGameStatus
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} GameStart=1 GameStart value
     * @property {number} GameBet=2 GameBet value
     * @property {number} GameAward=3 GameAward value
     */
    dragontigerProto.EnumGameStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "GameStart"] = 1;
        values[valuesById[2] = "GameBet"] = 2;
        values[valuesById[3] = "GameAward"] = 3;
        return values;
    })();

    /**
     * EnumBetArea enum.
     * @name dragontigerProto.EnumBetArea
     * @enum {number}
     * @property {number} Dragon=0 Dragon value
     * @property {number} Tiger=1 Tiger value
     * @property {number} Tie=2 Tie value
     */
    dragontigerProto.EnumBetArea = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Dragon"] = 0;
        values[valuesById[1] = "Tiger"] = 1;
        values[valuesById[2] = "Tie"] = 2;
        return values;
    })();

    /**
     * EnumRoomType enum.
     * @name dragontigerProto.EnumRoomType
     * @enum {number}
     * @property {number} unknown=0 unknown value
     * @property {number} Test=1 Test value
     * @property {number} Low=2 Low value
     * @property {number} Middle=3 Middle value
     * @property {number} High=4 High value
     * @property {number} All=5 All value
     */
    dragontigerProto.EnumRoomType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "unknown"] = 0;
        values[valuesById[1] = "Test"] = 1;
        values[valuesById[2] = "Low"] = 2;
        values[valuesById[3] = "Middle"] = 3;
        values[valuesById[4] = "High"] = 4;
        values[valuesById[5] = "All"] = 5;
        return values;
    })();

    dragontigerProto.Poker = (function() {

        /**
         * Properties of a Poker.
         * @memberof dragontigerProto
         * @interface IPoker
         * @property {dragontigerProto.EnumPokeSuit|null} [suit] Poker suit
         * @property {number|null} [point] Poker point
         */

        /**
         * Constructs a new Poker.
         * @memberof dragontigerProto
         * @classdesc Represents a Poker.
         * @implements IPoker
         * @constructor
         * @param {dragontigerProto.IPoker=} [properties] Properties to set
         */
        function Poker(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Poker suit.
         * @member {dragontigerProto.EnumPokeSuit} suit
         * @memberof dragontigerProto.Poker
         * @instance
         */
        Poker.prototype.suit = 0;

        /**
         * Poker point.
         * @member {number} point
         * @memberof dragontigerProto.Poker
         * @instance
         */
        Poker.prototype.point = 0;

        /**
         * Creates a new Poker instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.Poker
         * @static
         * @param {dragontigerProto.IPoker=} [properties] Properties to set
         * @returns {dragontigerProto.Poker} Poker instance
         */
        Poker.create = function create(properties) {
            return new Poker(properties);
        };

        /**
         * Encodes the specified Poker message. Does not implicitly {@link dragontigerProto.Poker.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.Poker
         * @static
         * @param {dragontigerProto.IPoker} message Poker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Poker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.suit != null && Object.hasOwnProperty.call(message, "suit"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.suit);
            if (message.point != null && Object.hasOwnProperty.call(message, "point"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.point);
            return writer;
        };

        /**
         * Encodes the specified Poker message, length delimited. Does not implicitly {@link dragontigerProto.Poker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.Poker
         * @static
         * @param {dragontigerProto.IPoker} message Poker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Poker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Poker message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.Poker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.Poker} Poker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Poker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.Poker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.suit = reader.int32();
                    break;
                case 2:
                    message.point = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Poker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.Poker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.Poker} Poker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Poker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Poker message.
         * @function verify
         * @memberof dragontigerProto.Poker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Poker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.suit != null && message.hasOwnProperty("suit"))
                switch (message.suit) {
                default:
                    return "suit: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.point != null && message.hasOwnProperty("point"))
                if (!$util.isInteger(message.point))
                    return "point: integer expected";
            return null;
        };

        /**
         * Creates a Poker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.Poker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.Poker} Poker
         */
        Poker.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.Poker)
                return object;
            var message = new $root.dragontigerProto.Poker();
            switch (object.suit) {
            case "unknown":
            case 0:
                message.suit = 0;
                break;
            case "diamond":
            case 1:
                message.suit = 1;
                break;
            case "club":
            case 2:
                message.suit = 2;
                break;
            case "heart":
            case 3:
                message.suit = 3;
                break;
            case "spade":
            case 4:
                message.suit = 4;
                break;
            case "ghost":
            case 5:
                message.suit = 5;
                break;
            }
            if (object.point != null)
                message.point = object.point >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Poker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.Poker
         * @static
         * @param {dragontigerProto.Poker} message Poker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Poker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.suit = options.enums === String ? "unknown" : 0;
                object.point = 0;
            }
            if (message.suit != null && message.hasOwnProperty("suit"))
                object.suit = options.enums === String ? $root.dragontigerProto.EnumPokeSuit[message.suit] : message.suit;
            if (message.point != null && message.hasOwnProperty("point"))
                object.point = message.point;
            return object;
        };

        /**
         * Converts this Poker to JSON.
         * @function toJSON
         * @memberof dragontigerProto.Poker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Poker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Poker;
    })();

    dragontigerProto.GameResultArea = (function() {

        /**
         * Properties of a GameResultArea.
         * @memberof dragontigerProto
         * @interface IGameResultArea
         * @property {boolean|null} [banker] GameResultArea banker
         * @property {boolean|null} [player] GameResultArea player
         * @property {boolean|null} [tie] GameResultArea tie
         */

        /**
         * Constructs a new GameResultArea.
         * @memberof dragontigerProto
         * @classdesc Represents a GameResultArea.
         * @implements IGameResultArea
         * @constructor
         * @param {dragontigerProto.IGameResultArea=} [properties] Properties to set
         */
        function GameResultArea(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResultArea banker.
         * @member {boolean} banker
         * @memberof dragontigerProto.GameResultArea
         * @instance
         */
        GameResultArea.prototype.banker = false;

        /**
         * GameResultArea player.
         * @member {boolean} player
         * @memberof dragontigerProto.GameResultArea
         * @instance
         */
        GameResultArea.prototype.player = false;

        /**
         * GameResultArea tie.
         * @member {boolean} tie
         * @memberof dragontigerProto.GameResultArea
         * @instance
         */
        GameResultArea.prototype.tie = false;

        /**
         * Creates a new GameResultArea instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.GameResultArea
         * @static
         * @param {dragontigerProto.IGameResultArea=} [properties] Properties to set
         * @returns {dragontigerProto.GameResultArea} GameResultArea instance
         */
        GameResultArea.create = function create(properties) {
            return new GameResultArea(properties);
        };

        /**
         * Encodes the specified GameResultArea message. Does not implicitly {@link dragontigerProto.GameResultArea.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.GameResultArea
         * @static
         * @param {dragontigerProto.IGameResultArea} message GameResultArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResultArea.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.banker != null && Object.hasOwnProperty.call(message, "banker"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.banker);
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.player);
            if (message.tie != null && Object.hasOwnProperty.call(message, "tie"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.tie);
            return writer;
        };

        /**
         * Encodes the specified GameResultArea message, length delimited. Does not implicitly {@link dragontigerProto.GameResultArea.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.GameResultArea
         * @static
         * @param {dragontigerProto.IGameResultArea} message GameResultArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResultArea.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResultArea message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.GameResultArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.GameResultArea} GameResultArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResultArea.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.GameResultArea();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.banker = reader.bool();
                    break;
                case 2:
                    message.player = reader.bool();
                    break;
                case 3:
                    message.tie = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameResultArea message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.GameResultArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.GameResultArea} GameResultArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResultArea.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResultArea message.
         * @function verify
         * @memberof dragontigerProto.GameResultArea
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResultArea.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.banker != null && message.hasOwnProperty("banker"))
                if (typeof message.banker !== "boolean")
                    return "banker: boolean expected";
            if (message.player != null && message.hasOwnProperty("player"))
                if (typeof message.player !== "boolean")
                    return "player: boolean expected";
            if (message.tie != null && message.hasOwnProperty("tie"))
                if (typeof message.tie !== "boolean")
                    return "tie: boolean expected";
            return null;
        };

        /**
         * Creates a GameResultArea message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.GameResultArea
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.GameResultArea} GameResultArea
         */
        GameResultArea.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.GameResultArea)
                return object;
            var message = new $root.dragontigerProto.GameResultArea();
            if (object.banker != null)
                message.banker = Boolean(object.banker);
            if (object.player != null)
                message.player = Boolean(object.player);
            if (object.tie != null)
                message.tie = Boolean(object.tie);
            return message;
        };

        /**
         * Creates a plain object from a GameResultArea message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.GameResultArea
         * @static
         * @param {dragontigerProto.GameResultArea} message GameResultArea
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameResultArea.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.banker = false;
                object.player = false;
                object.tie = false;
            }
            if (message.banker != null && message.hasOwnProperty("banker"))
                object.banker = message.banker;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = message.player;
            if (message.tie != null && message.hasOwnProperty("tie"))
                object.tie = message.tie;
            return object;
        };

        /**
         * Converts this GameResultArea to JSON.
         * @function toJSON
         * @memberof dragontigerProto.GameResultArea
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameResultArea.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameResultArea;
    })();

    dragontigerProto.GameResultPoker = (function() {

        /**
         * Properties of a GameResultPoker.
         * @memberof dragontigerProto
         * @interface IGameResultPoker
         * @property {Array.<dragontigerProto.IPoker>|null} [dragon] GameResultPoker dragon
         * @property {Array.<dragontigerProto.IPoker>|null} [tiger] GameResultPoker tiger
         */

        /**
         * Constructs a new GameResultPoker.
         * @memberof dragontigerProto
         * @classdesc Represents a GameResultPoker.
         * @implements IGameResultPoker
         * @constructor
         * @param {dragontigerProto.IGameResultPoker=} [properties] Properties to set
         */
        function GameResultPoker(properties) {
            this.dragon = [];
            this.tiger = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResultPoker dragon.
         * @member {Array.<dragontigerProto.IPoker>} dragon
         * @memberof dragontigerProto.GameResultPoker
         * @instance
         */
        GameResultPoker.prototype.dragon = $util.emptyArray;

        /**
         * GameResultPoker tiger.
         * @member {Array.<dragontigerProto.IPoker>} tiger
         * @memberof dragontigerProto.GameResultPoker
         * @instance
         */
        GameResultPoker.prototype.tiger = $util.emptyArray;

        /**
         * Creates a new GameResultPoker instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.GameResultPoker
         * @static
         * @param {dragontigerProto.IGameResultPoker=} [properties] Properties to set
         * @returns {dragontigerProto.GameResultPoker} GameResultPoker instance
         */
        GameResultPoker.create = function create(properties) {
            return new GameResultPoker(properties);
        };

        /**
         * Encodes the specified GameResultPoker message. Does not implicitly {@link dragontigerProto.GameResultPoker.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.GameResultPoker
         * @static
         * @param {dragontigerProto.IGameResultPoker} message GameResultPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResultPoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dragon != null && message.dragon.length)
                for (var i = 0; i < message.dragon.length; ++i)
                    $root.dragontigerProto.Poker.encode(message.dragon[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tiger != null && message.tiger.length)
                for (var i = 0; i < message.tiger.length; ++i)
                    $root.dragontigerProto.Poker.encode(message.tiger[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameResultPoker message, length delimited. Does not implicitly {@link dragontigerProto.GameResultPoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.GameResultPoker
         * @static
         * @param {dragontigerProto.IGameResultPoker} message GameResultPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResultPoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResultPoker message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.GameResultPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.GameResultPoker} GameResultPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResultPoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.GameResultPoker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.dragon && message.dragon.length))
                        message.dragon = [];
                    message.dragon.push($root.dragontigerProto.Poker.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.tiger && message.tiger.length))
                        message.tiger = [];
                    message.tiger.push($root.dragontigerProto.Poker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameResultPoker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.GameResultPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.GameResultPoker} GameResultPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResultPoker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResultPoker message.
         * @function verify
         * @memberof dragontigerProto.GameResultPoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResultPoker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dragon != null && message.hasOwnProperty("dragon")) {
                if (!Array.isArray(message.dragon))
                    return "dragon: array expected";
                for (var i = 0; i < message.dragon.length; ++i) {
                    var error = $root.dragontigerProto.Poker.verify(message.dragon[i]);
                    if (error)
                        return "dragon." + error;
                }
            }
            if (message.tiger != null && message.hasOwnProperty("tiger")) {
                if (!Array.isArray(message.tiger))
                    return "tiger: array expected";
                for (var i = 0; i < message.tiger.length; ++i) {
                    var error = $root.dragontigerProto.Poker.verify(message.tiger[i]);
                    if (error)
                        return "tiger." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameResultPoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.GameResultPoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.GameResultPoker} GameResultPoker
         */
        GameResultPoker.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.GameResultPoker)
                return object;
            var message = new $root.dragontigerProto.GameResultPoker();
            if (object.dragon) {
                if (!Array.isArray(object.dragon))
                    throw TypeError(".dragontigerProto.GameResultPoker.dragon: array expected");
                message.dragon = [];
                for (var i = 0; i < object.dragon.length; ++i) {
                    if (typeof object.dragon[i] !== "object")
                        throw TypeError(".dragontigerProto.GameResultPoker.dragon: object expected");
                    message.dragon[i] = $root.dragontigerProto.Poker.fromObject(object.dragon[i]);
                }
            }
            if (object.tiger) {
                if (!Array.isArray(object.tiger))
                    throw TypeError(".dragontigerProto.GameResultPoker.tiger: array expected");
                message.tiger = [];
                for (var i = 0; i < object.tiger.length; ++i) {
                    if (typeof object.tiger[i] !== "object")
                        throw TypeError(".dragontigerProto.GameResultPoker.tiger: object expected");
                    message.tiger[i] = $root.dragontigerProto.Poker.fromObject(object.tiger[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameResultPoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.GameResultPoker
         * @static
         * @param {dragontigerProto.GameResultPoker} message GameResultPoker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameResultPoker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.dragon = [];
                object.tiger = [];
            }
            if (message.dragon && message.dragon.length) {
                object.dragon = [];
                for (var j = 0; j < message.dragon.length; ++j)
                    object.dragon[j] = $root.dragontigerProto.Poker.toObject(message.dragon[j], options);
            }
            if (message.tiger && message.tiger.length) {
                object.tiger = [];
                for (var j = 0; j < message.tiger.length; ++j)
                    object.tiger[j] = $root.dragontigerProto.Poker.toObject(message.tiger[j], options);
            }
            return object;
        };

        /**
         * Converts this GameResultPoker to JSON.
         * @function toJSON
         * @memberof dragontigerProto.GameResultPoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameResultPoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameResultPoker;
    })();

    dragontigerProto.RoomInfoReq = (function() {

        /**
         * Properties of a RoomInfoReq.
         * @memberof dragontigerProto
         * @interface IRoomInfoReq
         * @property {dragontigerProto.EnumRoomType|null} [roomType] RoomInfoReq roomType
         */

        /**
         * Constructs a new RoomInfoReq.
         * @memberof dragontigerProto
         * @classdesc Represents a RoomInfoReq.
         * @implements IRoomInfoReq
         * @constructor
         * @param {dragontigerProto.IRoomInfoReq=} [properties] Properties to set
         */
        function RoomInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfoReq roomType.
         * @member {dragontigerProto.EnumRoomType} roomType
         * @memberof dragontigerProto.RoomInfoReq
         * @instance
         */
        RoomInfoReq.prototype.roomType = 0;

        /**
         * Creates a new RoomInfoReq instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.RoomInfoReq
         * @static
         * @param {dragontigerProto.IRoomInfoReq=} [properties] Properties to set
         * @returns {dragontigerProto.RoomInfoReq} RoomInfoReq instance
         */
        RoomInfoReq.create = function create(properties) {
            return new RoomInfoReq(properties);
        };

        /**
         * Encodes the specified RoomInfoReq message. Does not implicitly {@link dragontigerProto.RoomInfoReq.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.RoomInfoReq
         * @static
         * @param {dragontigerProto.IRoomInfoReq} message RoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomType != null && Object.hasOwnProperty.call(message, "roomType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomType);
            return writer;
        };

        /**
         * Encodes the specified RoomInfoReq message, length delimited. Does not implicitly {@link dragontigerProto.RoomInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.RoomInfoReq
         * @static
         * @param {dragontigerProto.IRoomInfoReq} message RoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.RoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.RoomInfoReq} RoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.RoomInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.RoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.RoomInfoReq} RoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfoReq message.
         * @function verify
         * @memberof dragontigerProto.RoomInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                switch (message.roomType) {
                default:
                    return "roomType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            return null;
        };

        /**
         * Creates a RoomInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.RoomInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.RoomInfoReq} RoomInfoReq
         */
        RoomInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.RoomInfoReq)
                return object;
            var message = new $root.dragontigerProto.RoomInfoReq();
            switch (object.roomType) {
            case "unknown":
            case 0:
                message.roomType = 0;
                break;
            case "Test":
            case 1:
                message.roomType = 1;
                break;
            case "Low":
            case 2:
                message.roomType = 2;
                break;
            case "Middle":
            case 3:
                message.roomType = 3;
                break;
            case "High":
            case 4:
                message.roomType = 4;
                break;
            case "All":
            case 5:
                message.roomType = 5;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.RoomInfoReq
         * @static
         * @param {dragontigerProto.RoomInfoReq} message RoomInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.roomType = options.enums === String ? "unknown" : 0;
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                object.roomType = options.enums === String ? $root.dragontigerProto.EnumRoomType[message.roomType] : message.roomType;
            return object;
        };

        /**
         * Converts this RoomInfoReq to JSON.
         * @function toJSON
         * @memberof dragontigerProto.RoomInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfoReq;
    })();

    dragontigerProto.RoomInfoResp = (function() {

        /**
         * Properties of a RoomInfoResp.
         * @memberof dragontigerProto
         * @interface IRoomInfoResp
         * @property {gamePackage.ICommandResult|null} [result] RoomInfoResp result
         * @property {Array.<dragontigerProto.ITableInfo>|null} [infos] RoomInfoResp infos
         */

        /**
         * Constructs a new RoomInfoResp.
         * @memberof dragontigerProto
         * @classdesc Represents a RoomInfoResp.
         * @implements IRoomInfoResp
         * @constructor
         * @param {dragontigerProto.IRoomInfoResp=} [properties] Properties to set
         */
        function RoomInfoResp(properties) {
            this.infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfoResp result.
         * @member {gamePackage.ICommandResult|null|undefined} result
         * @memberof dragontigerProto.RoomInfoResp
         * @instance
         */
        RoomInfoResp.prototype.result = null;

        /**
         * RoomInfoResp infos.
         * @member {Array.<dragontigerProto.ITableInfo>} infos
         * @memberof dragontigerProto.RoomInfoResp
         * @instance
         */
        RoomInfoResp.prototype.infos = $util.emptyArray;

        /**
         * Creates a new RoomInfoResp instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.RoomInfoResp
         * @static
         * @param {dragontigerProto.IRoomInfoResp=} [properties] Properties to set
         * @returns {dragontigerProto.RoomInfoResp} RoomInfoResp instance
         */
        RoomInfoResp.create = function create(properties) {
            return new RoomInfoResp(properties);
        };

        /**
         * Encodes the specified RoomInfoResp message. Does not implicitly {@link dragontigerProto.RoomInfoResp.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.RoomInfoResp
         * @static
         * @param {dragontigerProto.IRoomInfoResp} message RoomInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfoResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                $root.gamePackage.CommandResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.infos != null && message.infos.length)
                for (var i = 0; i < message.infos.length; ++i)
                    $root.dragontigerProto.TableInfo.encode(message.infos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomInfoResp message, length delimited. Does not implicitly {@link dragontigerProto.RoomInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.RoomInfoResp
         * @static
         * @param {dragontigerProto.IRoomInfoResp} message RoomInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.RoomInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.RoomInfoResp} RoomInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfoResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.RoomInfoResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.gamePackage.CommandResult.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.infos && message.infos.length))
                        message.infos = [];
                    message.infos.push($root.dragontigerProto.TableInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfoResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.RoomInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.RoomInfoResp} RoomInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfoResp message.
         * @function verify
         * @memberof dragontigerProto.RoomInfoResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfoResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.gamePackage.CommandResult.verify(message.result);
                if (error)
                    return "result." + error;
            }
            if (message.infos != null && message.hasOwnProperty("infos")) {
                if (!Array.isArray(message.infos))
                    return "infos: array expected";
                for (var i = 0; i < message.infos.length; ++i) {
                    var error = $root.dragontigerProto.TableInfo.verify(message.infos[i]);
                    if (error)
                        return "infos." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoomInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.RoomInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.RoomInfoResp} RoomInfoResp
         */
        RoomInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.RoomInfoResp)
                return object;
            var message = new $root.dragontigerProto.RoomInfoResp();
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".dragontigerProto.RoomInfoResp.result: object expected");
                message.result = $root.gamePackage.CommandResult.fromObject(object.result);
            }
            if (object.infos) {
                if (!Array.isArray(object.infos))
                    throw TypeError(".dragontigerProto.RoomInfoResp.infos: array expected");
                message.infos = [];
                for (var i = 0; i < object.infos.length; ++i) {
                    if (typeof object.infos[i] !== "object")
                        throw TypeError(".dragontigerProto.RoomInfoResp.infos: object expected");
                    message.infos[i] = $root.dragontigerProto.TableInfo.fromObject(object.infos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.RoomInfoResp
         * @static
         * @param {dragontigerProto.RoomInfoResp} message RoomInfoResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfoResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.infos = [];
            if (options.defaults)
                object.result = null;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.gamePackage.CommandResult.toObject(message.result, options);
            if (message.infos && message.infos.length) {
                object.infos = [];
                for (var j = 0; j < message.infos.length; ++j)
                    object.infos[j] = $root.dragontigerProto.TableInfo.toObject(message.infos[j], options);
            }
            return object;
        };

        /**
         * Converts this RoomInfoResp to JSON.
         * @function toJSON
         * @memberof dragontigerProto.RoomInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfoResp;
    })();

    dragontigerProto.TableInfo = (function() {

        /**
         * Properties of a TableInfo.
         * @memberof dragontigerProto
         * @interface ITableInfo
         * @property {dragontigerProto.EnumRoomType|null} [roomType] TableInfo roomType
         * @property {number|Long|null} [minBet] TableInfo minBet
         * @property {number|Long|null} [maxBet] TableInfo maxBet
         * @property {Array.<dragontigerProto.IGameResultArea>|null} [road] TableInfo road
         * @property {string|null} [tableId] TableInfo tableId
         */

        /**
         * Constructs a new TableInfo.
         * @memberof dragontigerProto
         * @classdesc Represents a TableInfo.
         * @implements ITableInfo
         * @constructor
         * @param {dragontigerProto.ITableInfo=} [properties] Properties to set
         */
        function TableInfo(properties) {
            this.road = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableInfo roomType.
         * @member {dragontigerProto.EnumRoomType} roomType
         * @memberof dragontigerProto.TableInfo
         * @instance
         */
        TableInfo.prototype.roomType = 0;

        /**
         * TableInfo minBet.
         * @member {number|Long} minBet
         * @memberof dragontigerProto.TableInfo
         * @instance
         */
        TableInfo.prototype.minBet = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TableInfo maxBet.
         * @member {number|Long} maxBet
         * @memberof dragontigerProto.TableInfo
         * @instance
         */
        TableInfo.prototype.maxBet = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TableInfo road.
         * @member {Array.<dragontigerProto.IGameResultArea>} road
         * @memberof dragontigerProto.TableInfo
         * @instance
         */
        TableInfo.prototype.road = $util.emptyArray;

        /**
         * TableInfo tableId.
         * @member {string} tableId
         * @memberof dragontigerProto.TableInfo
         * @instance
         */
        TableInfo.prototype.tableId = "";

        /**
         * Creates a new TableInfo instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.TableInfo
         * @static
         * @param {dragontigerProto.ITableInfo=} [properties] Properties to set
         * @returns {dragontigerProto.TableInfo} TableInfo instance
         */
        TableInfo.create = function create(properties) {
            return new TableInfo(properties);
        };

        /**
         * Encodes the specified TableInfo message. Does not implicitly {@link dragontigerProto.TableInfo.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.TableInfo
         * @static
         * @param {dragontigerProto.ITableInfo} message TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomType != null && Object.hasOwnProperty.call(message, "roomType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomType);
            if (message.minBet != null && Object.hasOwnProperty.call(message, "minBet"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.minBet);
            if (message.maxBet != null && Object.hasOwnProperty.call(message, "maxBet"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.maxBet);
            if (message.road != null && message.road.length)
                for (var i = 0; i < message.road.length; ++i)
                    $root.dragontigerProto.GameResultArea.encode(message.road[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.tableId != null && Object.hasOwnProperty.call(message, "tableId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified TableInfo message, length delimited. Does not implicitly {@link dragontigerProto.TableInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.TableInfo
         * @static
         * @param {dragontigerProto.ITableInfo} message TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableInfo message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.TableInfo} TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.TableInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomType = reader.int32();
                    break;
                case 2:
                    message.minBet = reader.uint64();
                    break;
                case 3:
                    message.maxBet = reader.uint64();
                    break;
                case 4:
                    if (!(message.road && message.road.length))
                        message.road = [];
                    message.road.push($root.dragontigerProto.GameResultArea.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.tableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.TableInfo} TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableInfo message.
         * @function verify
         * @memberof dragontigerProto.TableInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                switch (message.roomType) {
                default:
                    return "roomType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                if (!$util.isInteger(message.minBet) && !(message.minBet && $util.isInteger(message.minBet.low) && $util.isInteger(message.minBet.high)))
                    return "minBet: integer|Long expected";
            if (message.maxBet != null && message.hasOwnProperty("maxBet"))
                if (!$util.isInteger(message.maxBet) && !(message.maxBet && $util.isInteger(message.maxBet.low) && $util.isInteger(message.maxBet.high)))
                    return "maxBet: integer|Long expected";
            if (message.road != null && message.hasOwnProperty("road")) {
                if (!Array.isArray(message.road))
                    return "road: array expected";
                for (var i = 0; i < message.road.length; ++i) {
                    var error = $root.dragontigerProto.GameResultArea.verify(message.road[i]);
                    if (error)
                        return "road." + error;
                }
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            return null;
        };

        /**
         * Creates a TableInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.TableInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.TableInfo} TableInfo
         */
        TableInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.TableInfo)
                return object;
            var message = new $root.dragontigerProto.TableInfo();
            switch (object.roomType) {
            case "unknown":
            case 0:
                message.roomType = 0;
                break;
            case "Test":
            case 1:
                message.roomType = 1;
                break;
            case "Low":
            case 2:
                message.roomType = 2;
                break;
            case "Middle":
            case 3:
                message.roomType = 3;
                break;
            case "High":
            case 4:
                message.roomType = 4;
                break;
            case "All":
            case 5:
                message.roomType = 5;
                break;
            }
            if (object.minBet != null)
                if ($util.Long)
                    (message.minBet = $util.Long.fromValue(object.minBet)).unsigned = true;
                else if (typeof object.minBet === "string")
                    message.minBet = parseInt(object.minBet, 10);
                else if (typeof object.minBet === "number")
                    message.minBet = object.minBet;
                else if (typeof object.minBet === "object")
                    message.minBet = new $util.LongBits(object.minBet.low >>> 0, object.minBet.high >>> 0).toNumber(true);
            if (object.maxBet != null)
                if ($util.Long)
                    (message.maxBet = $util.Long.fromValue(object.maxBet)).unsigned = true;
                else if (typeof object.maxBet === "string")
                    message.maxBet = parseInt(object.maxBet, 10);
                else if (typeof object.maxBet === "number")
                    message.maxBet = object.maxBet;
                else if (typeof object.maxBet === "object")
                    message.maxBet = new $util.LongBits(object.maxBet.low >>> 0, object.maxBet.high >>> 0).toNumber(true);
            if (object.road) {
                if (!Array.isArray(object.road))
                    throw TypeError(".dragontigerProto.TableInfo.road: array expected");
                message.road = [];
                for (var i = 0; i < object.road.length; ++i) {
                    if (typeof object.road[i] !== "object")
                        throw TypeError(".dragontigerProto.TableInfo.road: object expected");
                    message.road[i] = $root.dragontigerProto.GameResultArea.fromObject(object.road[i]);
                }
            }
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            return message;
        };

        /**
         * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.TableInfo
         * @static
         * @param {dragontigerProto.TableInfo} message TableInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.road = [];
            if (options.defaults) {
                object.roomType = options.enums === String ? "unknown" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.minBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.minBet = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.maxBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxBet = options.longs === String ? "0" : 0;
                object.tableId = "";
            }
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                object.roomType = options.enums === String ? $root.dragontigerProto.EnumRoomType[message.roomType] : message.roomType;
            if (message.minBet != null && message.hasOwnProperty("minBet"))
                if (typeof message.minBet === "number")
                    object.minBet = options.longs === String ? String(message.minBet) : message.minBet;
                else
                    object.minBet = options.longs === String ? $util.Long.prototype.toString.call(message.minBet) : options.longs === Number ? new $util.LongBits(message.minBet.low >>> 0, message.minBet.high >>> 0).toNumber(true) : message.minBet;
            if (message.maxBet != null && message.hasOwnProperty("maxBet"))
                if (typeof message.maxBet === "number")
                    object.maxBet = options.longs === String ? String(message.maxBet) : message.maxBet;
                else
                    object.maxBet = options.longs === String ? $util.Long.prototype.toString.call(message.maxBet) : options.longs === Number ? new $util.LongBits(message.maxBet.low >>> 0, message.maxBet.high >>> 0).toNumber(true) : message.maxBet;
            if (message.road && message.road.length) {
                object.road = [];
                for (var j = 0; j < message.road.length; ++j)
                    object.road[j] = $root.dragontigerProto.GameResultArea.toObject(message.road[j], options);
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            return object;
        };

        /**
         * Converts this TableInfo to JSON.
         * @function toJSON
         * @memberof dragontigerProto.TableInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableInfo;
    })();

    dragontigerProto.GameStart = (function() {

        /**
         * Properties of a GameStart.
         * @memberof dragontigerProto
         * @interface IGameStart
         * @property {string|null} [roundId] GameStart roundId
         * @property {number|null} [gameCount] GameStart gameCount
         * @property {Array.<number>|null} [chips] GameStart chips
         * @property {number|null} [readyTimer] GameStart readyTimer
         */

        /**
         * Constructs a new GameStart.
         * @memberof dragontigerProto
         * @classdesc Represents a GameStart.
         * @implements IGameStart
         * @constructor
         * @param {dragontigerProto.IGameStart=} [properties] Properties to set
         */
        function GameStart(properties) {
            this.chips = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameStart roundId.
         * @member {string} roundId
         * @memberof dragontigerProto.GameStart
         * @instance
         */
        GameStart.prototype.roundId = "";

        /**
         * GameStart gameCount.
         * @member {number} gameCount
         * @memberof dragontigerProto.GameStart
         * @instance
         */
        GameStart.prototype.gameCount = 0;

        /**
         * GameStart chips.
         * @member {Array.<number>} chips
         * @memberof dragontigerProto.GameStart
         * @instance
         */
        GameStart.prototype.chips = $util.emptyArray;

        /**
         * GameStart readyTimer.
         * @member {number} readyTimer
         * @memberof dragontigerProto.GameStart
         * @instance
         */
        GameStart.prototype.readyTimer = 0;

        /**
         * Creates a new GameStart instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.GameStart
         * @static
         * @param {dragontigerProto.IGameStart=} [properties] Properties to set
         * @returns {dragontigerProto.GameStart} GameStart instance
         */
        GameStart.create = function create(properties) {
            return new GameStart(properties);
        };

        /**
         * Encodes the specified GameStart message. Does not implicitly {@link dragontigerProto.GameStart.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.GameStart
         * @static
         * @param {dragontigerProto.IGameStart} message GameStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roundId != null && Object.hasOwnProperty.call(message, "roundId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roundId);
            if (message.gameCount != null && Object.hasOwnProperty.call(message, "gameCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.gameCount);
            if (message.chips != null && message.chips.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.chips.length; ++i)
                    writer.uint32(message.chips[i]);
                writer.ldelim();
            }
            if (message.readyTimer != null && Object.hasOwnProperty.call(message, "readyTimer"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.readyTimer);
            return writer;
        };

        /**
         * Encodes the specified GameStart message, length delimited. Does not implicitly {@link dragontigerProto.GameStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.GameStart
         * @static
         * @param {dragontigerProto.IGameStart} message GameStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStart message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.GameStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.GameStart} GameStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.GameStart();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roundId = reader.string();
                    break;
                case 2:
                    message.gameCount = reader.uint32();
                    break;
                case 3:
                    if (!(message.chips && message.chips.length))
                        message.chips = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.chips.push(reader.uint32());
                    } else
                        message.chips.push(reader.uint32());
                    break;
                case 4:
                    message.readyTimer = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.GameStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.GameStart} GameStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStart message.
         * @function verify
         * @memberof dragontigerProto.GameStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                if (!$util.isString(message.roundId))
                    return "roundId: string expected";
            if (message.gameCount != null && message.hasOwnProperty("gameCount"))
                if (!$util.isInteger(message.gameCount))
                    return "gameCount: integer expected";
            if (message.chips != null && message.hasOwnProperty("chips")) {
                if (!Array.isArray(message.chips))
                    return "chips: array expected";
                for (var i = 0; i < message.chips.length; ++i)
                    if (!$util.isInteger(message.chips[i]))
                        return "chips: integer[] expected";
            }
            if (message.readyTimer != null && message.hasOwnProperty("readyTimer"))
                if (!$util.isInteger(message.readyTimer))
                    return "readyTimer: integer expected";
            return null;
        };

        /**
         * Creates a GameStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.GameStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.GameStart} GameStart
         */
        GameStart.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.GameStart)
                return object;
            var message = new $root.dragontigerProto.GameStart();
            if (object.roundId != null)
                message.roundId = String(object.roundId);
            if (object.gameCount != null)
                message.gameCount = object.gameCount >>> 0;
            if (object.chips) {
                if (!Array.isArray(object.chips))
                    throw TypeError(".dragontigerProto.GameStart.chips: array expected");
                message.chips = [];
                for (var i = 0; i < object.chips.length; ++i)
                    message.chips[i] = object.chips[i] >>> 0;
            }
            if (object.readyTimer != null)
                message.readyTimer = object.readyTimer >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.GameStart
         * @static
         * @param {dragontigerProto.GameStart} message GameStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.chips = [];
            if (options.defaults) {
                object.roundId = "";
                object.gameCount = 0;
                object.readyTimer = 0;
            }
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                object.roundId = message.roundId;
            if (message.gameCount != null && message.hasOwnProperty("gameCount"))
                object.gameCount = message.gameCount;
            if (message.chips && message.chips.length) {
                object.chips = [];
                for (var j = 0; j < message.chips.length; ++j)
                    object.chips[j] = message.chips[j];
            }
            if (message.readyTimer != null && message.hasOwnProperty("readyTimer"))
                object.readyTimer = message.readyTimer;
            return object;
        };

        /**
         * Converts this GameStart to JSON.
         * @function toJSON
         * @memberof dragontigerProto.GameStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStart;
    })();

    dragontigerProto.GameBet = (function() {

        /**
         * Properties of a GameBet.
         * @memberof dragontigerProto
         * @interface IGameBet
         * @property {number|null} [readyTimer] GameBet readyTimer
         * @property {number|null} [cardNumber] GameBet cardNumber
         * @property {number|null} [usedCardNumber] GameBet usedCardNumber
         */

        /**
         * Constructs a new GameBet.
         * @memberof dragontigerProto
         * @classdesc Represents a GameBet.
         * @implements IGameBet
         * @constructor
         * @param {dragontigerProto.IGameBet=} [properties] Properties to set
         */
        function GameBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameBet readyTimer.
         * @member {number} readyTimer
         * @memberof dragontigerProto.GameBet
         * @instance
         */
        GameBet.prototype.readyTimer = 0;

        /**
         * GameBet cardNumber.
         * @member {number} cardNumber
         * @memberof dragontigerProto.GameBet
         * @instance
         */
        GameBet.prototype.cardNumber = 0;

        /**
         * GameBet usedCardNumber.
         * @member {number} usedCardNumber
         * @memberof dragontigerProto.GameBet
         * @instance
         */
        GameBet.prototype.usedCardNumber = 0;

        /**
         * Creates a new GameBet instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.GameBet
         * @static
         * @param {dragontigerProto.IGameBet=} [properties] Properties to set
         * @returns {dragontigerProto.GameBet} GameBet instance
         */
        GameBet.create = function create(properties) {
            return new GameBet(properties);
        };

        /**
         * Encodes the specified GameBet message. Does not implicitly {@link dragontigerProto.GameBet.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.GameBet
         * @static
         * @param {dragontigerProto.IGameBet} message GameBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.readyTimer != null && Object.hasOwnProperty.call(message, "readyTimer"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.readyTimer);
            if (message.cardNumber != null && Object.hasOwnProperty.call(message, "cardNumber"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.cardNumber);
            if (message.usedCardNumber != null && Object.hasOwnProperty.call(message, "usedCardNumber"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.usedCardNumber);
            return writer;
        };

        /**
         * Encodes the specified GameBet message, length delimited. Does not implicitly {@link dragontigerProto.GameBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.GameBet
         * @static
         * @param {dragontigerProto.IGameBet} message GameBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameBet message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.GameBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.GameBet} GameBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.GameBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.readyTimer = reader.uint32();
                    break;
                case 2:
                    message.cardNumber = reader.uint32();
                    break;
                case 3:
                    message.usedCardNumber = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.GameBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.GameBet} GameBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameBet message.
         * @function verify
         * @memberof dragontigerProto.GameBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.readyTimer != null && message.hasOwnProperty("readyTimer"))
                if (!$util.isInteger(message.readyTimer))
                    return "readyTimer: integer expected";
            if (message.cardNumber != null && message.hasOwnProperty("cardNumber"))
                if (!$util.isInteger(message.cardNumber))
                    return "cardNumber: integer expected";
            if (message.usedCardNumber != null && message.hasOwnProperty("usedCardNumber"))
                if (!$util.isInteger(message.usedCardNumber))
                    return "usedCardNumber: integer expected";
            return null;
        };

        /**
         * Creates a GameBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.GameBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.GameBet} GameBet
         */
        GameBet.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.GameBet)
                return object;
            var message = new $root.dragontigerProto.GameBet();
            if (object.readyTimer != null)
                message.readyTimer = object.readyTimer >>> 0;
            if (object.cardNumber != null)
                message.cardNumber = object.cardNumber >>> 0;
            if (object.usedCardNumber != null)
                message.usedCardNumber = object.usedCardNumber >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.GameBet
         * @static
         * @param {dragontigerProto.GameBet} message GameBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.readyTimer = 0;
                object.cardNumber = 0;
                object.usedCardNumber = 0;
            }
            if (message.readyTimer != null && message.hasOwnProperty("readyTimer"))
                object.readyTimer = message.readyTimer;
            if (message.cardNumber != null && message.hasOwnProperty("cardNumber"))
                object.cardNumber = message.cardNumber;
            if (message.usedCardNumber != null && message.hasOwnProperty("usedCardNumber"))
                object.usedCardNumber = message.usedCardNumber;
            return object;
        };

        /**
         * Converts this GameBet to JSON.
         * @function toJSON
         * @memberof dragontigerProto.GameBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBet;
    })();

    dragontigerProto.GameAward = (function() {

        /**
         * Properties of a GameAward.
         * @memberof dragontigerProto
         * @interface IGameAward
         * @property {number|null} [readyTimer] GameAward readyTimer
         * @property {dragontigerProto.IGameResultArea|null} [gameResult] GameAward gameResult
         * @property {dragontigerProto.IGameResultPoker|null} [poker] GameAward poker
         * @property {number|Long|null} [winBalance] GameAward winBalance
         * @property {number|Long|null} [balance] GameAward balance
         */

        /**
         * Constructs a new GameAward.
         * @memberof dragontigerProto
         * @classdesc Represents a GameAward.
         * @implements IGameAward
         * @constructor
         * @param {dragontigerProto.IGameAward=} [properties] Properties to set
         */
        function GameAward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameAward readyTimer.
         * @member {number} readyTimer
         * @memberof dragontigerProto.GameAward
         * @instance
         */
        GameAward.prototype.readyTimer = 0;

        /**
         * GameAward gameResult.
         * @member {dragontigerProto.IGameResultArea|null|undefined} gameResult
         * @memberof dragontigerProto.GameAward
         * @instance
         */
        GameAward.prototype.gameResult = null;

        /**
         * GameAward poker.
         * @member {dragontigerProto.IGameResultPoker|null|undefined} poker
         * @memberof dragontigerProto.GameAward
         * @instance
         */
        GameAward.prototype.poker = null;

        /**
         * GameAward winBalance.
         * @member {number|Long} winBalance
         * @memberof dragontigerProto.GameAward
         * @instance
         */
        GameAward.prototype.winBalance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GameAward balance.
         * @member {number|Long} balance
         * @memberof dragontigerProto.GameAward
         * @instance
         */
        GameAward.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new GameAward instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.GameAward
         * @static
         * @param {dragontigerProto.IGameAward=} [properties] Properties to set
         * @returns {dragontigerProto.GameAward} GameAward instance
         */
        GameAward.create = function create(properties) {
            return new GameAward(properties);
        };

        /**
         * Encodes the specified GameAward message. Does not implicitly {@link dragontigerProto.GameAward.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.GameAward
         * @static
         * @param {dragontigerProto.IGameAward} message GameAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameAward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.readyTimer != null && Object.hasOwnProperty.call(message, "readyTimer"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.readyTimer);
            if (message.gameResult != null && Object.hasOwnProperty.call(message, "gameResult"))
                $root.dragontigerProto.GameResultArea.encode(message.gameResult, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.poker != null && Object.hasOwnProperty.call(message, "poker"))
                $root.dragontigerProto.GameResultPoker.encode(message.poker, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.winBalance != null && Object.hasOwnProperty.call(message, "winBalance"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.winBalance);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.balance);
            return writer;
        };

        /**
         * Encodes the specified GameAward message, length delimited. Does not implicitly {@link dragontigerProto.GameAward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.GameAward
         * @static
         * @param {dragontigerProto.IGameAward} message GameAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameAward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameAward message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.GameAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.GameAward} GameAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameAward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.GameAward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.readyTimer = reader.uint32();
                    break;
                case 2:
                    message.gameResult = $root.dragontigerProto.GameResultArea.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.poker = $root.dragontigerProto.GameResultPoker.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.winBalance = reader.uint64();
                    break;
                case 5:
                    message.balance = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameAward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.GameAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.GameAward} GameAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameAward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameAward message.
         * @function verify
         * @memberof dragontigerProto.GameAward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameAward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.readyTimer != null && message.hasOwnProperty("readyTimer"))
                if (!$util.isInteger(message.readyTimer))
                    return "readyTimer: integer expected";
            if (message.gameResult != null && message.hasOwnProperty("gameResult")) {
                var error = $root.dragontigerProto.GameResultArea.verify(message.gameResult);
                if (error)
                    return "gameResult." + error;
            }
            if (message.poker != null && message.hasOwnProperty("poker")) {
                var error = $root.dragontigerProto.GameResultPoker.verify(message.poker);
                if (error)
                    return "poker." + error;
            }
            if (message.winBalance != null && message.hasOwnProperty("winBalance"))
                if (!$util.isInteger(message.winBalance) && !(message.winBalance && $util.isInteger(message.winBalance.low) && $util.isInteger(message.winBalance.high)))
                    return "winBalance: integer|Long expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            return null;
        };

        /**
         * Creates a GameAward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.GameAward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.GameAward} GameAward
         */
        GameAward.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.GameAward)
                return object;
            var message = new $root.dragontigerProto.GameAward();
            if (object.readyTimer != null)
                message.readyTimer = object.readyTimer >>> 0;
            if (object.gameResult != null) {
                if (typeof object.gameResult !== "object")
                    throw TypeError(".dragontigerProto.GameAward.gameResult: object expected");
                message.gameResult = $root.dragontigerProto.GameResultArea.fromObject(object.gameResult);
            }
            if (object.poker != null) {
                if (typeof object.poker !== "object")
                    throw TypeError(".dragontigerProto.GameAward.poker: object expected");
                message.poker = $root.dragontigerProto.GameResultPoker.fromObject(object.poker);
            }
            if (object.winBalance != null)
                if ($util.Long)
                    (message.winBalance = $util.Long.fromValue(object.winBalance)).unsigned = true;
                else if (typeof object.winBalance === "string")
                    message.winBalance = parseInt(object.winBalance, 10);
                else if (typeof object.winBalance === "number")
                    message.winBalance = object.winBalance;
                else if (typeof object.winBalance === "object")
                    message.winBalance = new $util.LongBits(object.winBalance.low >>> 0, object.winBalance.high >>> 0).toNumber(true);
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = true;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a GameAward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.GameAward
         * @static
         * @param {dragontigerProto.GameAward} message GameAward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameAward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.readyTimer = 0;
                object.gameResult = null;
                object.poker = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.winBalance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.winBalance = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
            }
            if (message.readyTimer != null && message.hasOwnProperty("readyTimer"))
                object.readyTimer = message.readyTimer;
            if (message.gameResult != null && message.hasOwnProperty("gameResult"))
                object.gameResult = $root.dragontigerProto.GameResultArea.toObject(message.gameResult, options);
            if (message.poker != null && message.hasOwnProperty("poker"))
                object.poker = $root.dragontigerProto.GameResultPoker.toObject(message.poker, options);
            if (message.winBalance != null && message.hasOwnProperty("winBalance"))
                if (typeof message.winBalance === "number")
                    object.winBalance = options.longs === String ? String(message.winBalance) : message.winBalance;
                else
                    object.winBalance = options.longs === String ? $util.Long.prototype.toString.call(message.winBalance) : options.longs === Number ? new $util.LongBits(message.winBalance.low >>> 0, message.winBalance.high >>> 0).toNumber(true) : message.winBalance;
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber(true) : message.balance;
            return object;
        };

        /**
         * Converts this GameAward to JSON.
         * @function toJSON
         * @memberof dragontigerProto.GameAward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameAward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameAward;
    })();

    dragontigerProto.AreaBetAmount = (function() {

        /**
         * Properties of an AreaBetAmount.
         * @memberof dragontigerProto
         * @interface IAreaBetAmount
         * @property {number|Long|null} [dragonArea] AreaBetAmount dragonArea
         * @property {number|Long|null} [tigerArea] AreaBetAmount tigerArea
         * @property {number|Long|null} [tieArea] AreaBetAmount tieArea
         */

        /**
         * Constructs a new AreaBetAmount.
         * @memberof dragontigerProto
         * @classdesc Represents an AreaBetAmount.
         * @implements IAreaBetAmount
         * @constructor
         * @param {dragontigerProto.IAreaBetAmount=} [properties] Properties to set
         */
        function AreaBetAmount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AreaBetAmount dragonArea.
         * @member {number|Long} dragonArea
         * @memberof dragontigerProto.AreaBetAmount
         * @instance
         */
        AreaBetAmount.prototype.dragonArea = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AreaBetAmount tigerArea.
         * @member {number|Long} tigerArea
         * @memberof dragontigerProto.AreaBetAmount
         * @instance
         */
        AreaBetAmount.prototype.tigerArea = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AreaBetAmount tieArea.
         * @member {number|Long} tieArea
         * @memberof dragontigerProto.AreaBetAmount
         * @instance
         */
        AreaBetAmount.prototype.tieArea = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new AreaBetAmount instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.AreaBetAmount
         * @static
         * @param {dragontigerProto.IAreaBetAmount=} [properties] Properties to set
         * @returns {dragontigerProto.AreaBetAmount} AreaBetAmount instance
         */
        AreaBetAmount.create = function create(properties) {
            return new AreaBetAmount(properties);
        };

        /**
         * Encodes the specified AreaBetAmount message. Does not implicitly {@link dragontigerProto.AreaBetAmount.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.AreaBetAmount
         * @static
         * @param {dragontigerProto.IAreaBetAmount} message AreaBetAmount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AreaBetAmount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dragonArea != null && Object.hasOwnProperty.call(message, "dragonArea"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.dragonArea);
            if (message.tigerArea != null && Object.hasOwnProperty.call(message, "tigerArea"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.tigerArea);
            if (message.tieArea != null && Object.hasOwnProperty.call(message, "tieArea"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.tieArea);
            return writer;
        };

        /**
         * Encodes the specified AreaBetAmount message, length delimited. Does not implicitly {@link dragontigerProto.AreaBetAmount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.AreaBetAmount
         * @static
         * @param {dragontigerProto.IAreaBetAmount} message AreaBetAmount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AreaBetAmount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AreaBetAmount message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.AreaBetAmount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.AreaBetAmount} AreaBetAmount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AreaBetAmount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.AreaBetAmount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dragonArea = reader.uint64();
                    break;
                case 2:
                    message.tigerArea = reader.uint64();
                    break;
                case 3:
                    message.tieArea = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AreaBetAmount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.AreaBetAmount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.AreaBetAmount} AreaBetAmount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AreaBetAmount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AreaBetAmount message.
         * @function verify
         * @memberof dragontigerProto.AreaBetAmount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AreaBetAmount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dragonArea != null && message.hasOwnProperty("dragonArea"))
                if (!$util.isInteger(message.dragonArea) && !(message.dragonArea && $util.isInteger(message.dragonArea.low) && $util.isInteger(message.dragonArea.high)))
                    return "dragonArea: integer|Long expected";
            if (message.tigerArea != null && message.hasOwnProperty("tigerArea"))
                if (!$util.isInteger(message.tigerArea) && !(message.tigerArea && $util.isInteger(message.tigerArea.low) && $util.isInteger(message.tigerArea.high)))
                    return "tigerArea: integer|Long expected";
            if (message.tieArea != null && message.hasOwnProperty("tieArea"))
                if (!$util.isInteger(message.tieArea) && !(message.tieArea && $util.isInteger(message.tieArea.low) && $util.isInteger(message.tieArea.high)))
                    return "tieArea: integer|Long expected";
            return null;
        };

        /**
         * Creates an AreaBetAmount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.AreaBetAmount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.AreaBetAmount} AreaBetAmount
         */
        AreaBetAmount.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.AreaBetAmount)
                return object;
            var message = new $root.dragontigerProto.AreaBetAmount();
            if (object.dragonArea != null)
                if ($util.Long)
                    (message.dragonArea = $util.Long.fromValue(object.dragonArea)).unsigned = true;
                else if (typeof object.dragonArea === "string")
                    message.dragonArea = parseInt(object.dragonArea, 10);
                else if (typeof object.dragonArea === "number")
                    message.dragonArea = object.dragonArea;
                else if (typeof object.dragonArea === "object")
                    message.dragonArea = new $util.LongBits(object.dragonArea.low >>> 0, object.dragonArea.high >>> 0).toNumber(true);
            if (object.tigerArea != null)
                if ($util.Long)
                    (message.tigerArea = $util.Long.fromValue(object.tigerArea)).unsigned = true;
                else if (typeof object.tigerArea === "string")
                    message.tigerArea = parseInt(object.tigerArea, 10);
                else if (typeof object.tigerArea === "number")
                    message.tigerArea = object.tigerArea;
                else if (typeof object.tigerArea === "object")
                    message.tigerArea = new $util.LongBits(object.tigerArea.low >>> 0, object.tigerArea.high >>> 0).toNumber(true);
            if (object.tieArea != null)
                if ($util.Long)
                    (message.tieArea = $util.Long.fromValue(object.tieArea)).unsigned = true;
                else if (typeof object.tieArea === "string")
                    message.tieArea = parseInt(object.tieArea, 10);
                else if (typeof object.tieArea === "number")
                    message.tieArea = object.tieArea;
                else if (typeof object.tieArea === "object")
                    message.tieArea = new $util.LongBits(object.tieArea.low >>> 0, object.tieArea.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an AreaBetAmount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.AreaBetAmount
         * @static
         * @param {dragontigerProto.AreaBetAmount} message AreaBetAmount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AreaBetAmount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dragonArea = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dragonArea = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.tigerArea = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tigerArea = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.tieArea = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tieArea = options.longs === String ? "0" : 0;
            }
            if (message.dragonArea != null && message.hasOwnProperty("dragonArea"))
                if (typeof message.dragonArea === "number")
                    object.dragonArea = options.longs === String ? String(message.dragonArea) : message.dragonArea;
                else
                    object.dragonArea = options.longs === String ? $util.Long.prototype.toString.call(message.dragonArea) : options.longs === Number ? new $util.LongBits(message.dragonArea.low >>> 0, message.dragonArea.high >>> 0).toNumber(true) : message.dragonArea;
            if (message.tigerArea != null && message.hasOwnProperty("tigerArea"))
                if (typeof message.tigerArea === "number")
                    object.tigerArea = options.longs === String ? String(message.tigerArea) : message.tigerArea;
                else
                    object.tigerArea = options.longs === String ? $util.Long.prototype.toString.call(message.tigerArea) : options.longs === Number ? new $util.LongBits(message.tigerArea.low >>> 0, message.tigerArea.high >>> 0).toNumber(true) : message.tigerArea;
            if (message.tieArea != null && message.hasOwnProperty("tieArea"))
                if (typeof message.tieArea === "number")
                    object.tieArea = options.longs === String ? String(message.tieArea) : message.tieArea;
                else
                    object.tieArea = options.longs === String ? $util.Long.prototype.toString.call(message.tieArea) : options.longs === Number ? new $util.LongBits(message.tieArea.low >>> 0, message.tieArea.high >>> 0).toNumber(true) : message.tieArea;
            return object;
        };

        /**
         * Converts this AreaBetAmount to JSON.
         * @function toJSON
         * @memberof dragontigerProto.AreaBetAmount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AreaBetAmount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AreaBetAmount;
    })();

    dragontigerProto.AreaBettingOdds = (function() {

        /**
         * Properties of an AreaBettingOdds.
         * @memberof dragontigerProto
         * @interface IAreaBettingOdds
         * @property {number|null} [dragonArea] AreaBettingOdds dragonArea
         * @property {number|null} [tigerArea] AreaBettingOdds tigerArea
         * @property {number|null} [tieArea] AreaBettingOdds tieArea
         */

        /**
         * Constructs a new AreaBettingOdds.
         * @memberof dragontigerProto
         * @classdesc Represents an AreaBettingOdds.
         * @implements IAreaBettingOdds
         * @constructor
         * @param {dragontigerProto.IAreaBettingOdds=} [properties] Properties to set
         */
        function AreaBettingOdds(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AreaBettingOdds dragonArea.
         * @member {number} dragonArea
         * @memberof dragontigerProto.AreaBettingOdds
         * @instance
         */
        AreaBettingOdds.prototype.dragonArea = 0;

        /**
         * AreaBettingOdds tigerArea.
         * @member {number} tigerArea
         * @memberof dragontigerProto.AreaBettingOdds
         * @instance
         */
        AreaBettingOdds.prototype.tigerArea = 0;

        /**
         * AreaBettingOdds tieArea.
         * @member {number} tieArea
         * @memberof dragontigerProto.AreaBettingOdds
         * @instance
         */
        AreaBettingOdds.prototype.tieArea = 0;

        /**
         * Creates a new AreaBettingOdds instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.AreaBettingOdds
         * @static
         * @param {dragontigerProto.IAreaBettingOdds=} [properties] Properties to set
         * @returns {dragontigerProto.AreaBettingOdds} AreaBettingOdds instance
         */
        AreaBettingOdds.create = function create(properties) {
            return new AreaBettingOdds(properties);
        };

        /**
         * Encodes the specified AreaBettingOdds message. Does not implicitly {@link dragontigerProto.AreaBettingOdds.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.AreaBettingOdds
         * @static
         * @param {dragontigerProto.IAreaBettingOdds} message AreaBettingOdds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AreaBettingOdds.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dragonArea != null && Object.hasOwnProperty.call(message, "dragonArea"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.dragonArea);
            if (message.tigerArea != null && Object.hasOwnProperty.call(message, "tigerArea"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.tigerArea);
            if (message.tieArea != null && Object.hasOwnProperty.call(message, "tieArea"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.tieArea);
            return writer;
        };

        /**
         * Encodes the specified AreaBettingOdds message, length delimited. Does not implicitly {@link dragontigerProto.AreaBettingOdds.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.AreaBettingOdds
         * @static
         * @param {dragontigerProto.IAreaBettingOdds} message AreaBettingOdds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AreaBettingOdds.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AreaBettingOdds message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.AreaBettingOdds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.AreaBettingOdds} AreaBettingOdds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AreaBettingOdds.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.AreaBettingOdds();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dragonArea = reader.uint32();
                    break;
                case 2:
                    message.tigerArea = reader.uint32();
                    break;
                case 3:
                    message.tieArea = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AreaBettingOdds message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.AreaBettingOdds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.AreaBettingOdds} AreaBettingOdds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AreaBettingOdds.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AreaBettingOdds message.
         * @function verify
         * @memberof dragontigerProto.AreaBettingOdds
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AreaBettingOdds.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dragonArea != null && message.hasOwnProperty("dragonArea"))
                if (!$util.isInteger(message.dragonArea))
                    return "dragonArea: integer expected";
            if (message.tigerArea != null && message.hasOwnProperty("tigerArea"))
                if (!$util.isInteger(message.tigerArea))
                    return "tigerArea: integer expected";
            if (message.tieArea != null && message.hasOwnProperty("tieArea"))
                if (!$util.isInteger(message.tieArea))
                    return "tieArea: integer expected";
            return null;
        };

        /**
         * Creates an AreaBettingOdds message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.AreaBettingOdds
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.AreaBettingOdds} AreaBettingOdds
         */
        AreaBettingOdds.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.AreaBettingOdds)
                return object;
            var message = new $root.dragontigerProto.AreaBettingOdds();
            if (object.dragonArea != null)
                message.dragonArea = object.dragonArea >>> 0;
            if (object.tigerArea != null)
                message.tigerArea = object.tigerArea >>> 0;
            if (object.tieArea != null)
                message.tieArea = object.tieArea >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an AreaBettingOdds message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.AreaBettingOdds
         * @static
         * @param {dragontigerProto.AreaBettingOdds} message AreaBettingOdds
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AreaBettingOdds.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.dragonArea = 0;
                object.tigerArea = 0;
                object.tieArea = 0;
            }
            if (message.dragonArea != null && message.hasOwnProperty("dragonArea"))
                object.dragonArea = message.dragonArea;
            if (message.tigerArea != null && message.hasOwnProperty("tigerArea"))
                object.tigerArea = message.tigerArea;
            if (message.tieArea != null && message.hasOwnProperty("tieArea"))
                object.tieArea = message.tieArea;
            return object;
        };

        /**
         * Converts this AreaBettingOdds to JSON.
         * @function toJSON
         * @memberof dragontigerProto.AreaBettingOdds
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AreaBettingOdds.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AreaBettingOdds;
    })();

    dragontigerProto.UserBetReq = (function() {

        /**
         * Properties of a UserBetReq.
         * @memberof dragontigerProto
         * @interface IUserBetReq
         * @property {dragontigerProto.EnumBetArea|null} [area] UserBetReq area
         * @property {number|Long|null} [amount] UserBetReq amount
         */

        /**
         * Constructs a new UserBetReq.
         * @memberof dragontigerProto
         * @classdesc Represents a UserBetReq.
         * @implements IUserBetReq
         * @constructor
         * @param {dragontigerProto.IUserBetReq=} [properties] Properties to set
         */
        function UserBetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserBetReq area.
         * @member {dragontigerProto.EnumBetArea} area
         * @memberof dragontigerProto.UserBetReq
         * @instance
         */
        UserBetReq.prototype.area = 0;

        /**
         * UserBetReq amount.
         * @member {number|Long} amount
         * @memberof dragontigerProto.UserBetReq
         * @instance
         */
        UserBetReq.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new UserBetReq instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.UserBetReq
         * @static
         * @param {dragontigerProto.IUserBetReq=} [properties] Properties to set
         * @returns {dragontigerProto.UserBetReq} UserBetReq instance
         */
        UserBetReq.create = function create(properties) {
            return new UserBetReq(properties);
        };

        /**
         * Encodes the specified UserBetReq message. Does not implicitly {@link dragontigerProto.UserBetReq.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.UserBetReq
         * @static
         * @param {dragontigerProto.IUserBetReq} message UserBetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.area != null && Object.hasOwnProperty.call(message, "area"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.area);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.amount);
            return writer;
        };

        /**
         * Encodes the specified UserBetReq message, length delimited. Does not implicitly {@link dragontigerProto.UserBetReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.UserBetReq
         * @static
         * @param {dragontigerProto.IUserBetReq} message UserBetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserBetReq message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.UserBetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.UserBetReq} UserBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.UserBetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.area = reader.int32();
                    break;
                case 2:
                    message.amount = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserBetReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.UserBetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.UserBetReq} UserBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserBetReq message.
         * @function verify
         * @memberof dragontigerProto.UserBetReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserBetReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.area != null && message.hasOwnProperty("area"))
                switch (message.area) {
                default:
                    return "area: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserBetReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.UserBetReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.UserBetReq} UserBetReq
         */
        UserBetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.UserBetReq)
                return object;
            var message = new $root.dragontigerProto.UserBetReq();
            switch (object.area) {
            case "Dragon":
            case 0:
                message.area = 0;
                break;
            case "Tiger":
            case 1:
                message.area = 1;
                break;
            case "Tie":
            case 2:
                message.area = 2;
                break;
            }
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a UserBetReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.UserBetReq
         * @static
         * @param {dragontigerProto.UserBetReq} message UserBetReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserBetReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.area = options.enums === String ? "Dragon" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
            }
            if (message.area != null && message.hasOwnProperty("area"))
                object.area = options.enums === String ? $root.dragontigerProto.EnumBetArea[message.area] : message.area;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
            return object;
        };

        /**
         * Converts this UserBetReq to JSON.
         * @function toJSON
         * @memberof dragontigerProto.UserBetReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserBetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserBetReq;
    })();

    dragontigerProto.UserBetResp = (function() {

        /**
         * Properties of a UserBetResp.
         * @memberof dragontigerProto
         * @interface IUserBetResp
         * @property {gamePackage.ICommandResult|null} [result] UserBetResp result
         * @property {dragontigerProto.IAreaBetAmount|null} [userBetting] UserBetResp userBetting
         * @property {number|Long|null} [balance] UserBetResp balance
         */

        /**
         * Constructs a new UserBetResp.
         * @memberof dragontigerProto
         * @classdesc Represents a UserBetResp.
         * @implements IUserBetResp
         * @constructor
         * @param {dragontigerProto.IUserBetResp=} [properties] Properties to set
         */
        function UserBetResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserBetResp result.
         * @member {gamePackage.ICommandResult|null|undefined} result
         * @memberof dragontigerProto.UserBetResp
         * @instance
         */
        UserBetResp.prototype.result = null;

        /**
         * UserBetResp userBetting.
         * @member {dragontigerProto.IAreaBetAmount|null|undefined} userBetting
         * @memberof dragontigerProto.UserBetResp
         * @instance
         */
        UserBetResp.prototype.userBetting = null;

        /**
         * UserBetResp balance.
         * @member {number|Long} balance
         * @memberof dragontigerProto.UserBetResp
         * @instance
         */
        UserBetResp.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new UserBetResp instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.UserBetResp
         * @static
         * @param {dragontigerProto.IUserBetResp=} [properties] Properties to set
         * @returns {dragontigerProto.UserBetResp} UserBetResp instance
         */
        UserBetResp.create = function create(properties) {
            return new UserBetResp(properties);
        };

        /**
         * Encodes the specified UserBetResp message. Does not implicitly {@link dragontigerProto.UserBetResp.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.UserBetResp
         * @static
         * @param {dragontigerProto.IUserBetResp} message UserBetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBetResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                $root.gamePackage.CommandResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.userBetting != null && Object.hasOwnProperty.call(message, "userBetting"))
                $root.dragontigerProto.AreaBetAmount.encode(message.userBetting, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.balance);
            return writer;
        };

        /**
         * Encodes the specified UserBetResp message, length delimited. Does not implicitly {@link dragontigerProto.UserBetResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.UserBetResp
         * @static
         * @param {dragontigerProto.IUserBetResp} message UserBetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserBetResp message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.UserBetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.UserBetResp} UserBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.UserBetResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.gamePackage.CommandResult.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userBetting = $root.dragontigerProto.AreaBetAmount.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.balance = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserBetResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.UserBetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.UserBetResp} UserBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserBetResp message.
         * @function verify
         * @memberof dragontigerProto.UserBetResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserBetResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.gamePackage.CommandResult.verify(message.result);
                if (error)
                    return "result." + error;
            }
            if (message.userBetting != null && message.hasOwnProperty("userBetting")) {
                var error = $root.dragontigerProto.AreaBetAmount.verify(message.userBetting);
                if (error)
                    return "userBetting." + error;
            }
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserBetResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.UserBetResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.UserBetResp} UserBetResp
         */
        UserBetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.UserBetResp)
                return object;
            var message = new $root.dragontigerProto.UserBetResp();
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".dragontigerProto.UserBetResp.result: object expected");
                message.result = $root.gamePackage.CommandResult.fromObject(object.result);
            }
            if (object.userBetting != null) {
                if (typeof object.userBetting !== "object")
                    throw TypeError(".dragontigerProto.UserBetResp.userBetting: object expected");
                message.userBetting = $root.dragontigerProto.AreaBetAmount.fromObject(object.userBetting);
            }
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = true;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a UserBetResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.UserBetResp
         * @static
         * @param {dragontigerProto.UserBetResp} message UserBetResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserBetResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = null;
                object.userBetting = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.gamePackage.CommandResult.toObject(message.result, options);
            if (message.userBetting != null && message.hasOwnProperty("userBetting"))
                object.userBetting = $root.dragontigerProto.AreaBetAmount.toObject(message.userBetting, options);
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber(true) : message.balance;
            return object;
        };

        /**
         * Converts this UserBetResp to JSON.
         * @function toJSON
         * @memberof dragontigerProto.UserBetResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserBetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserBetResp;
    })();

    dragontigerProto.GameStatusReq = (function() {

        /**
         * Properties of a GameStatusReq.
         * @memberof dragontigerProto
         * @interface IGameStatusReq
         * @property {number|null} [userId] GameStatusReq userId
         */

        /**
         * Constructs a new GameStatusReq.
         * @memberof dragontigerProto
         * @classdesc Represents a GameStatusReq.
         * @implements IGameStatusReq
         * @constructor
         * @param {dragontigerProto.IGameStatusReq=} [properties] Properties to set
         */
        function GameStatusReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameStatusReq userId.
         * @member {number} userId
         * @memberof dragontigerProto.GameStatusReq
         * @instance
         */
        GameStatusReq.prototype.userId = 0;

        /**
         * Creates a new GameStatusReq instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.GameStatusReq
         * @static
         * @param {dragontigerProto.IGameStatusReq=} [properties] Properties to set
         * @returns {dragontigerProto.GameStatusReq} GameStatusReq instance
         */
        GameStatusReq.create = function create(properties) {
            return new GameStatusReq(properties);
        };

        /**
         * Encodes the specified GameStatusReq message. Does not implicitly {@link dragontigerProto.GameStatusReq.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.GameStatusReq
         * @static
         * @param {dragontigerProto.IGameStatusReq} message GameStatusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatusReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified GameStatusReq message, length delimited. Does not implicitly {@link dragontigerProto.GameStatusReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.GameStatusReq
         * @static
         * @param {dragontigerProto.IGameStatusReq} message GameStatusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatusReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStatusReq message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.GameStatusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.GameStatusReq} GameStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatusReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.GameStatusReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameStatusReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.GameStatusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.GameStatusReq} GameStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatusReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStatusReq message.
         * @function verify
         * @memberof dragontigerProto.GameStatusReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStatusReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a GameStatusReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.GameStatusReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.GameStatusReq} GameStatusReq
         */
        GameStatusReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.GameStatusReq)
                return object;
            var message = new $root.dragontigerProto.GameStatusReq();
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameStatusReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.GameStatusReq
         * @static
         * @param {dragontigerProto.GameStatusReq} message GameStatusReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStatusReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this GameStatusReq to JSON.
         * @function toJSON
         * @memberof dragontigerProto.GameStatusReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStatusReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStatusReq;
    })();

    dragontigerProto.GameStatusResp = (function() {

        /**
         * Properties of a GameStatusResp.
         * @memberof dragontigerProto
         * @interface IGameStatusResp
         * @property {gamePackage.ICommandResult|null} [result] GameStatusResp result
         * @property {Array.<dragontigerProto.IGameResultArea>|null} [road] GameStatusResp road
         * @property {dragontigerProto.IAreaBetAmount|null} [areaBetAmount] GameStatusResp areaBetAmount
         * @property {dragontigerProto.EnumGameStatus|null} [currentStatus] GameStatusResp currentStatus
         * @property {dragontigerProto.IGameStart|null} [gameStart] GameStatusResp gameStart
         * @property {dragontigerProto.IGameAward|null} [gameAward] GameStatusResp gameAward
         * @property {dragontigerProto.IAreaBettingOdds|null} [areaBettingOdds] GameStatusResp areaBettingOdds
         * @property {number|null} [readyTimer] GameStatusResp readyTimer
         */

        /**
         * Constructs a new GameStatusResp.
         * @memberof dragontigerProto
         * @classdesc Represents a GameStatusResp.
         * @implements IGameStatusResp
         * @constructor
         * @param {dragontigerProto.IGameStatusResp=} [properties] Properties to set
         */
        function GameStatusResp(properties) {
            this.road = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameStatusResp result.
         * @member {gamePackage.ICommandResult|null|undefined} result
         * @memberof dragontigerProto.GameStatusResp
         * @instance
         */
        GameStatusResp.prototype.result = null;

        /**
         * GameStatusResp road.
         * @member {Array.<dragontigerProto.IGameResultArea>} road
         * @memberof dragontigerProto.GameStatusResp
         * @instance
         */
        GameStatusResp.prototype.road = $util.emptyArray;

        /**
         * GameStatusResp areaBetAmount.
         * @member {dragontigerProto.IAreaBetAmount|null|undefined} areaBetAmount
         * @memberof dragontigerProto.GameStatusResp
         * @instance
         */
        GameStatusResp.prototype.areaBetAmount = null;

        /**
         * GameStatusResp currentStatus.
         * @member {dragontigerProto.EnumGameStatus} currentStatus
         * @memberof dragontigerProto.GameStatusResp
         * @instance
         */
        GameStatusResp.prototype.currentStatus = 0;

        /**
         * GameStatusResp gameStart.
         * @member {dragontigerProto.IGameStart|null|undefined} gameStart
         * @memberof dragontigerProto.GameStatusResp
         * @instance
         */
        GameStatusResp.prototype.gameStart = null;

        /**
         * GameStatusResp gameAward.
         * @member {dragontigerProto.IGameAward|null|undefined} gameAward
         * @memberof dragontigerProto.GameStatusResp
         * @instance
         */
        GameStatusResp.prototype.gameAward = null;

        /**
         * GameStatusResp areaBettingOdds.
         * @member {dragontigerProto.IAreaBettingOdds|null|undefined} areaBettingOdds
         * @memberof dragontigerProto.GameStatusResp
         * @instance
         */
        GameStatusResp.prototype.areaBettingOdds = null;

        /**
         * GameStatusResp readyTimer.
         * @member {number} readyTimer
         * @memberof dragontigerProto.GameStatusResp
         * @instance
         */
        GameStatusResp.prototype.readyTimer = 0;

        /**
         * Creates a new GameStatusResp instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.GameStatusResp
         * @static
         * @param {dragontigerProto.IGameStatusResp=} [properties] Properties to set
         * @returns {dragontigerProto.GameStatusResp} GameStatusResp instance
         */
        GameStatusResp.create = function create(properties) {
            return new GameStatusResp(properties);
        };

        /**
         * Encodes the specified GameStatusResp message. Does not implicitly {@link dragontigerProto.GameStatusResp.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.GameStatusResp
         * @static
         * @param {dragontigerProto.IGameStatusResp} message GameStatusResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatusResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                $root.gamePackage.CommandResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.road != null && message.road.length)
                for (var i = 0; i < message.road.length; ++i)
                    $root.dragontigerProto.GameResultArea.encode(message.road[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.areaBetAmount != null && Object.hasOwnProperty.call(message, "areaBetAmount"))
                $root.dragontigerProto.AreaBetAmount.encode(message.areaBetAmount, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.currentStatus != null && Object.hasOwnProperty.call(message, "currentStatus"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.currentStatus);
            if (message.gameStart != null && Object.hasOwnProperty.call(message, "gameStart"))
                $root.dragontigerProto.GameStart.encode(message.gameStart, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.gameAward != null && Object.hasOwnProperty.call(message, "gameAward"))
                $root.dragontigerProto.GameAward.encode(message.gameAward, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.areaBettingOdds != null && Object.hasOwnProperty.call(message, "areaBettingOdds"))
                $root.dragontigerProto.AreaBettingOdds.encode(message.areaBettingOdds, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.readyTimer != null && Object.hasOwnProperty.call(message, "readyTimer"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.readyTimer);
            return writer;
        };

        /**
         * Encodes the specified GameStatusResp message, length delimited. Does not implicitly {@link dragontigerProto.GameStatusResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.GameStatusResp
         * @static
         * @param {dragontigerProto.IGameStatusResp} message GameStatusResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatusResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStatusResp message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.GameStatusResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.GameStatusResp} GameStatusResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatusResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.GameStatusResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.gamePackage.CommandResult.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.road && message.road.length))
                        message.road = [];
                    message.road.push($root.dragontigerProto.GameResultArea.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.areaBetAmount = $root.dragontigerProto.AreaBetAmount.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.currentStatus = reader.int32();
                    break;
                case 5:
                    message.gameStart = $root.dragontigerProto.GameStart.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.gameAward = $root.dragontigerProto.GameAward.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.areaBettingOdds = $root.dragontigerProto.AreaBettingOdds.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.readyTimer = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameStatusResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.GameStatusResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.GameStatusResp} GameStatusResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatusResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStatusResp message.
         * @function verify
         * @memberof dragontigerProto.GameStatusResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStatusResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.gamePackage.CommandResult.verify(message.result);
                if (error)
                    return "result." + error;
            }
            if (message.road != null && message.hasOwnProperty("road")) {
                if (!Array.isArray(message.road))
                    return "road: array expected";
                for (var i = 0; i < message.road.length; ++i) {
                    var error = $root.dragontigerProto.GameResultArea.verify(message.road[i]);
                    if (error)
                        return "road." + error;
                }
            }
            if (message.areaBetAmount != null && message.hasOwnProperty("areaBetAmount")) {
                var error = $root.dragontigerProto.AreaBetAmount.verify(message.areaBetAmount);
                if (error)
                    return "areaBetAmount." + error;
            }
            if (message.currentStatus != null && message.hasOwnProperty("currentStatus"))
                switch (message.currentStatus) {
                default:
                    return "currentStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.gameStart != null && message.hasOwnProperty("gameStart")) {
                var error = $root.dragontigerProto.GameStart.verify(message.gameStart);
                if (error)
                    return "gameStart." + error;
            }
            if (message.gameAward != null && message.hasOwnProperty("gameAward")) {
                var error = $root.dragontigerProto.GameAward.verify(message.gameAward);
                if (error)
                    return "gameAward." + error;
            }
            if (message.areaBettingOdds != null && message.hasOwnProperty("areaBettingOdds")) {
                var error = $root.dragontigerProto.AreaBettingOdds.verify(message.areaBettingOdds);
                if (error)
                    return "areaBettingOdds." + error;
            }
            if (message.readyTimer != null && message.hasOwnProperty("readyTimer"))
                if (!$util.isInteger(message.readyTimer))
                    return "readyTimer: integer expected";
            return null;
        };

        /**
         * Creates a GameStatusResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.GameStatusResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.GameStatusResp} GameStatusResp
         */
        GameStatusResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.GameStatusResp)
                return object;
            var message = new $root.dragontigerProto.GameStatusResp();
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".dragontigerProto.GameStatusResp.result: object expected");
                message.result = $root.gamePackage.CommandResult.fromObject(object.result);
            }
            if (object.road) {
                if (!Array.isArray(object.road))
                    throw TypeError(".dragontigerProto.GameStatusResp.road: array expected");
                message.road = [];
                for (var i = 0; i < object.road.length; ++i) {
                    if (typeof object.road[i] !== "object")
                        throw TypeError(".dragontigerProto.GameStatusResp.road: object expected");
                    message.road[i] = $root.dragontigerProto.GameResultArea.fromObject(object.road[i]);
                }
            }
            if (object.areaBetAmount != null) {
                if (typeof object.areaBetAmount !== "object")
                    throw TypeError(".dragontigerProto.GameStatusResp.areaBetAmount: object expected");
                message.areaBetAmount = $root.dragontigerProto.AreaBetAmount.fromObject(object.areaBetAmount);
            }
            switch (object.currentStatus) {
            case "Unknown":
            case 0:
                message.currentStatus = 0;
                break;
            case "GameStart":
            case 1:
                message.currentStatus = 1;
                break;
            case "GameBet":
            case 2:
                message.currentStatus = 2;
                break;
            case "GameAward":
            case 3:
                message.currentStatus = 3;
                break;
            }
            if (object.gameStart != null) {
                if (typeof object.gameStart !== "object")
                    throw TypeError(".dragontigerProto.GameStatusResp.gameStart: object expected");
                message.gameStart = $root.dragontigerProto.GameStart.fromObject(object.gameStart);
            }
            if (object.gameAward != null) {
                if (typeof object.gameAward !== "object")
                    throw TypeError(".dragontigerProto.GameStatusResp.gameAward: object expected");
                message.gameAward = $root.dragontigerProto.GameAward.fromObject(object.gameAward);
            }
            if (object.areaBettingOdds != null) {
                if (typeof object.areaBettingOdds !== "object")
                    throw TypeError(".dragontigerProto.GameStatusResp.areaBettingOdds: object expected");
                message.areaBettingOdds = $root.dragontigerProto.AreaBettingOdds.fromObject(object.areaBettingOdds);
            }
            if (object.readyTimer != null)
                message.readyTimer = object.readyTimer >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameStatusResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.GameStatusResp
         * @static
         * @param {dragontigerProto.GameStatusResp} message GameStatusResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStatusResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.road = [];
            if (options.defaults) {
                object.result = null;
                object.areaBetAmount = null;
                object.currentStatus = options.enums === String ? "Unknown" : 0;
                object.gameStart = null;
                object.gameAward = null;
                object.areaBettingOdds = null;
                object.readyTimer = 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.gamePackage.CommandResult.toObject(message.result, options);
            if (message.road && message.road.length) {
                object.road = [];
                for (var j = 0; j < message.road.length; ++j)
                    object.road[j] = $root.dragontigerProto.GameResultArea.toObject(message.road[j], options);
            }
            if (message.areaBetAmount != null && message.hasOwnProperty("areaBetAmount"))
                object.areaBetAmount = $root.dragontigerProto.AreaBetAmount.toObject(message.areaBetAmount, options);
            if (message.currentStatus != null && message.hasOwnProperty("currentStatus"))
                object.currentStatus = options.enums === String ? $root.dragontigerProto.EnumGameStatus[message.currentStatus] : message.currentStatus;
            if (message.gameStart != null && message.hasOwnProperty("gameStart"))
                object.gameStart = $root.dragontigerProto.GameStart.toObject(message.gameStart, options);
            if (message.gameAward != null && message.hasOwnProperty("gameAward"))
                object.gameAward = $root.dragontigerProto.GameAward.toObject(message.gameAward, options);
            if (message.areaBettingOdds != null && message.hasOwnProperty("areaBettingOdds"))
                object.areaBettingOdds = $root.dragontigerProto.AreaBettingOdds.toObject(message.areaBettingOdds, options);
            if (message.readyTimer != null && message.hasOwnProperty("readyTimer"))
                object.readyTimer = message.readyTimer;
            return object;
        };

        /**
         * Converts this GameStatusResp to JSON.
         * @function toJSON
         * @memberof dragontigerProto.GameStatusResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStatusResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStatusResp;
    })();

    dragontigerProto.UserExitReq = (function() {

        /**
         * Properties of a UserExitReq.
         * @memberof dragontigerProto
         * @interface IUserExitReq
         */

        /**
         * Constructs a new UserExitReq.
         * @memberof dragontigerProto
         * @classdesc Represents a UserExitReq.
         * @implements IUserExitReq
         * @constructor
         * @param {dragontigerProto.IUserExitReq=} [properties] Properties to set
         */
        function UserExitReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserExitReq instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.UserExitReq
         * @static
         * @param {dragontigerProto.IUserExitReq=} [properties] Properties to set
         * @returns {dragontigerProto.UserExitReq} UserExitReq instance
         */
        UserExitReq.create = function create(properties) {
            return new UserExitReq(properties);
        };

        /**
         * Encodes the specified UserExitReq message. Does not implicitly {@link dragontigerProto.UserExitReq.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.UserExitReq
         * @static
         * @param {dragontigerProto.IUserExitReq} message UserExitReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserExitReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserExitReq message, length delimited. Does not implicitly {@link dragontigerProto.UserExitReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.UserExitReq
         * @static
         * @param {dragontigerProto.IUserExitReq} message UserExitReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserExitReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserExitReq message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.UserExitReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.UserExitReq} UserExitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserExitReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.UserExitReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserExitReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.UserExitReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.UserExitReq} UserExitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserExitReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserExitReq message.
         * @function verify
         * @memberof dragontigerProto.UserExitReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserExitReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserExitReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.UserExitReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.UserExitReq} UserExitReq
         */
        UserExitReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.UserExitReq)
                return object;
            return new $root.dragontigerProto.UserExitReq();
        };

        /**
         * Creates a plain object from a UserExitReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.UserExitReq
         * @static
         * @param {dragontigerProto.UserExitReq} message UserExitReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserExitReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserExitReq to JSON.
         * @function toJSON
         * @memberof dragontigerProto.UserExitReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserExitReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserExitReq;
    })();

    dragontigerProto.UserExitResp = (function() {

        /**
         * Properties of a UserExitResp.
         * @memberof dragontigerProto
         * @interface IUserExitResp
         * @property {gamePackage.ICommandResult|null} [result] UserExitResp result
         */

        /**
         * Constructs a new UserExitResp.
         * @memberof dragontigerProto
         * @classdesc Represents a UserExitResp.
         * @implements IUserExitResp
         * @constructor
         * @param {dragontigerProto.IUserExitResp=} [properties] Properties to set
         */
        function UserExitResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserExitResp result.
         * @member {gamePackage.ICommandResult|null|undefined} result
         * @memberof dragontigerProto.UserExitResp
         * @instance
         */
        UserExitResp.prototype.result = null;

        /**
         * Creates a new UserExitResp instance using the specified properties.
         * @function create
         * @memberof dragontigerProto.UserExitResp
         * @static
         * @param {dragontigerProto.IUserExitResp=} [properties] Properties to set
         * @returns {dragontigerProto.UserExitResp} UserExitResp instance
         */
        UserExitResp.create = function create(properties) {
            return new UserExitResp(properties);
        };

        /**
         * Encodes the specified UserExitResp message. Does not implicitly {@link dragontigerProto.UserExitResp.verify|verify} messages.
         * @function encode
         * @memberof dragontigerProto.UserExitResp
         * @static
         * @param {dragontigerProto.IUserExitResp} message UserExitResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserExitResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                $root.gamePackage.CommandResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserExitResp message, length delimited. Does not implicitly {@link dragontigerProto.UserExitResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dragontigerProto.UserExitResp
         * @static
         * @param {dragontigerProto.IUserExitResp} message UserExitResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserExitResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserExitResp message from the specified reader or buffer.
         * @function decode
         * @memberof dragontigerProto.UserExitResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dragontigerProto.UserExitResp} UserExitResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserExitResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dragontigerProto.UserExitResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.gamePackage.CommandResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserExitResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dragontigerProto.UserExitResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dragontigerProto.UserExitResp} UserExitResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserExitResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserExitResp message.
         * @function verify
         * @memberof dragontigerProto.UserExitResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserExitResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result")) {
                var error = $root.gamePackage.CommandResult.verify(message.result);
                if (error)
                    return "result." + error;
            }
            return null;
        };

        /**
         * Creates a UserExitResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dragontigerProto.UserExitResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dragontigerProto.UserExitResp} UserExitResp
         */
        UserExitResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dragontigerProto.UserExitResp)
                return object;
            var message = new $root.dragontigerProto.UserExitResp();
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".dragontigerProto.UserExitResp.result: object expected");
                message.result = $root.gamePackage.CommandResult.fromObject(object.result);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserExitResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dragontigerProto.UserExitResp
         * @static
         * @param {dragontigerProto.UserExitResp} message UserExitResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserExitResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = null;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.gamePackage.CommandResult.toObject(message.result, options);
            return object;
        };

        /**
         * Converts this UserExitResp to JSON.
         * @function toJSON
         * @memberof dragontigerProto.UserExitResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserExitResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserExitResp;
    })();

    return dragontigerProto;
})();

module.exports = $root;
