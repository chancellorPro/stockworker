@extends('layouts.pages.config', [
	'title' => 'Box log',
	'data' => $data,
	'filter' => $filter,
])

@section('controls')
    <div id="canvas_handler" style="position: absolute;right:100000px;"></div>
    @php
        use Carbon\Carbon as Carbon;
        $field = 'report';
        $startDay = Carbon::now()->subMonth(1)->startOfMonth()->format('Y-m-d');
        $endDay = Carbon::now()->subMonth(1)->endOfMonth()->format('Y-m-d');
    @endphp
    <div class="col-sm-12">
        <div class="col-sm-3">
            @if(auth()->id() < 3)
                {{-- Create --}}
                @include('common.buttons.create', [
                    'route' => 'box-log.create',
                    'name' => __('Create action'),
                    'class' => 'ajax-modal-action show-form',
                    'dataset' => [
                        'header' => __('Create action'),
                    ],
                ])
            @endif
        </div>
        <div class="col-sm-2">
            <input
                type="text"
                class="form-control datepicker"
                name="{{$field}}[from]"
                autocomplete="off"
                placeholder="from"
                value="{{ $dateFrom ?? $startDay }}"
            >
        </div>
        <div class="col-sm-2">
            <input
                type="text"
                class="form-control datepicker"
                name="{{$field}}[to]"
                autocomplete="off"
                placeholder="to"
                value="{{ $dateTo ?? $endDay }}"
            >
        </div>
        <div class="col-sm-5">
            {{-- report --}}
            @include('common.buttons.save', [
                'route' => 'box-report',
                'id' => 'report',
                'name' => __('Report'),
                'fa_class' => 'fa-save',
                'class' => 'reports',
                'dataset' => [
                    'method' => 'GET',
                ],
            ])
        </div>
    </div>
@endsection

@section('content')
    <div class="">
        <table class="table table-hover">
            <thead>
            <tr>
                <th>@lang('Action type')</th>
                <th>@lang('Name')</th>
                <th>@lang('Count')</th>
                <th>@lang('Date')</th>
                <th class="actions">@lang('Actions')</th>
            </tr>
            <tr>
                <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'action_type', 'filterCollection' => $transaction_type])</th>
                <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'box_id', 'filterCollection' => $boxes])</th>
                <th></th>
                <th>@include('layouts.filter-col', ['filterType' => 'date_range', 'field' => 'date'])</th>
                <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
            </tr>
            </thead>
            <tbody class="fast-save-page-container">
            @php
                $currentDate = Carbon::now()->setTimezone('Europe/Kiev')->format('Y-m-d');
            @endphp
            @foreach($data as $item)
                <tr>
                    <td style="background: #1abb9c;text-align: left;color: #fff;font-size: 15px;font-weight: bold;vertical-align: middle;{{ $item->action_type ? 'background:#ff897b' : 'background:#1abb9c' }}"
                        title="{{ $item->action_type ? __('Outcome') : __('Income') }}">
                        {{ $item->action_type ? __('Outcome') : __('Income') }}
                    </td>
                    <td>{{ $item->box->name }}</td>
                    <td>{{ $item->count }}</td>
                    <td style="{{ $currentDate > Carbon::createFromFormat('Y-m-d', $item->date)->setTimezone('Europe/Kiev') ? 'background:silver' : '' }}">{{ $item->date }}</td>
                    <td>
                        @if(auth()->id() < 3)
                            @include('common.buttons.edit', [
                                'route' => 'box-log.edit',
                                'route_params' => [
                                    'id' => $item->id,
                                ],
                                'class' => 'ajax-modal-action show-form',
                                'dataset' => [
                                    'header' => $item->box->name,
                                ],
                            ])
                            @include('common.buttons.delete', [
                                'route' => 'box-log.destroy',
                                'route_params' => [
                                    'id' => $item->id,
                                ],
                                'dataset' => [
                                    'header' => $item->box->name,
                                ],
                            ])
                        @endif
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>

@endsection

@push('scripts')
    <script src="{{ asset("js/filter-col.js") }}"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            init_filter_col("{{ route('box-log.index') }}");

        });

        $(document)
            .on('input', '[name="count"]', function (e) {
                if ($(this).val().length > 0) {
                    $('[name="box_count"]').attr('disabled', true);
                } else {
                    $('[name="box_count"]').attr('disabled', false);
                }
            });
        $(document)
            .on('input', '[name="box_count"]', function (e) {
                if ($(this).val().length > 0) {
                    $('[name="count"]').attr('disabled', true);
                } else {
                    $('[name="count"]').attr('disabled', false);
                }
            });

        // $(document)
        //     .on('click', '.reports', function (e) {
        //         e.preventDefault();
        //
        //         let dateFrom = $('[name="today[from]"]').val();
        //         let dateTo = $('[name="today[to]"]').val();
        //         let canvas = $('#canvas-data').val();
        //         let data = {from: dateFrom, to: dateTo, canvas: canvas};
        //         let canvas_handler = $("#canvas_handler");
        //
        //         if (Object.keys(data).length) {
        //             $.ajax({
        //                 url: $(this).attr('href'),
        //                 type: 'POST',
        //                 data: data,
        //                 error: response => {
        //                     if (!!response.responseJSON) {
        //                         this._error(response.responseJSON);
        //                     }
        //                 },
        //                 success: function (r) {
        //                     canvas_handler.empty();
        //                     if (r.hasOwnProperty('success')) {
        //                         $('.modal-title').text(r.success);
        //                         $('.modal-header').css('background', '#a7ff83');
        //                     } else {
        //                         new ModalBuilder()
        //                             .header('Предпросмотр отчета')
        //                             .body(r)
        //                             .modal();
        //                     }
        //                 },
        //                 complete: function (r) {
        //                 },
        //             });
        //         }
        //
        //         return false;
        //     });


        const modalsContainer = $('body');

        const MODAL_SIZES = {
            sm: 'modal-sm',
            md: 'modal-md',
            lg: 'modal-lg',
        };

        /**
         * Unique index of the modal
         *
         * @type {number}
         */
        let modalIndex = 0;

        /**
         * Counter of the modals at the page
         *
         * @type {number}
         */
        let modalCounter = 0;

        /**
         * Modal Builder
         */
        class ModalBuilder {

            constructor() {
                modalIndex++;
                this._id = 'modals-container-item-' + modalIndex;
            }

            size(size) {
                if (!!MODAL_SIZES[size]) {
                    this._size = MODAL_SIZES[size];
                }

                return this;
            }

            header(header) {
                this._header = header;

                return this;
            }

            body(body) {
                this._body = body;

                return this;
            }

            footer(footer) {
                this._footer = footer;

                return this;
            }

            dataset(dataset) {
                this._dataset = dataset;

                return this;
            }

            _getID() {
                return this._id;
            }

            _getSize() {
                return !!this._size ? this._size : MODAL_SIZES.md;
            }

            _getHeader() {
                if (!!this._header) {
                    return `
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                   <h4 class="modal-title">${this._header}</h4>
                </div>`;
                }
                return '';
            }

            _getFooter() {
                let result = null;
                if (!!this._footer) {
                    result = $(`<div class="modal-footer"></div>`)
                        .append($(`
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">
                        Cancel
                    </button>
                `))
                        .append(this._footer);
                }
                return result;
            }

            _getBody() {
                let result = null;
                if (!!this._body) {
                    result = $(`<div class="modal-body"></div>`)
                        .append(this._body);
                }
                return result;
            }

            /**
             * Set callback that will be call before build modal
             *
             * @param callback
             */
            beforeBuild(callback) {
                this._beforeBuildCallback = callback;
                return this;
            }

            _beforeBuild() {
                if (typeof this._beforeBuildCallback === "function") {
                    this._beforeBuildCallback();
                }
            }

            /**
             * Set callback that will be call after build modal
             *
             * @param callback
             */
            afterBuild(callback) {
                this._afterBuildCallback = callback;
                return this;
            }

            _afterBuild() {
                if (typeof this._afterBuildCallback === "function") {
                    this._afterBuildCallback();
                }
            }

            /**
             * Set callback that will be call after close modal
             *
             * @param callback
             */
            onClose(callback) {
                this._onCloseCallback = callback;
                return this;
            }

            _onClose() {
                if (typeof this._onCloseCallback === "function") {
                    this._onCloseCallback();
                }
            }

            modal(content) {
                /**
                 * Data attributes
                 * @type {Array}
                 */
                let dataset = [];
                if (!!this._dataset) {
                    for (var name in this._dataset) {
                        dataset.push(`data-${name}="${this._dataset[name]}"`);
                    }
                }

                let html = $(`
            <div id="${this._getID()}" class="modal fade" role="dialog" aria-hidden="true" ${dataset.join(' ')}>
                <div class="modal-dialog modal-dialog-centered ${this._getSize()}">
                    <div class="modal-content"></div>
                </div>
            </div>`);

                if (!!content) {
                    this.body(content);
                }

                /**
                 * Call the beforeBuild callback
                 */
                this._beforeBuild();

                html.find('.modal-content')
                    .append(this._getHeader())
                    .append(this._getBody())
                    .append(this._getFooter());

                html.find('.select2').select2();

                html.find('.datepicker')
                    .datetimepicker({
                        format: 'yyyy-mm-dd',
                        autoclose: true,
                        minView: '2'
                    });

                modalsContainer.append(html);

                /**
                 * Call the afterBuild callback
                 */
                this._afterBuild();

                /**
                 * update counter of modals at the page
                 */
                modalCounter++;

                $('#' + this._getID())
                    .on('hidden.bs.modal', () => {
                        modalCounter--;
                        $('#' + this._getID())
                            .off('hidden.bs.modal')
                            .remove();
                        /**
                         * Call the onClose callback
                         */
                        this._onClose();
                    })
                    .modal();
            }
        }

    </script>
@endpush
