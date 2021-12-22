<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <x-application-logo class="w-20 h-20 fill-current text-gray-500"/>
            </a>
        </x-slot>

        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')"/>

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors"/>

        <form method="POST" action="{{ route('dang-nhap') }}" class="mt-8">
            @csrf
            <div class="py-2" x-data="{ show: true }">
                <div class="relative">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-xs py-1 mr-2 mt-1"
                         onclick="document.getElementById('email').value=''"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                            <path
                                d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/>
                        </svg>
                    </div>
                    <input placeholder="EMAIL"
                           value="{{ old('email') }}"
                           type="email"
                           id="email"
                           name="email"
                           required
                           autocomplete="email"
                           class="text-xs block mt-1 w-full square-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
            </div>
            <div class="py-2" x-data="{ show: true }">
                <div class="relative">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-xs py-1 mr-2">
                        <svg class="h-6 text-gray-700" width="16" height="16" fill="none" @click="show = !show"
                             :class="{'hidden': !show, 'block':show }" xmlns="http://www.w3.org/2000/svg"
                             viewbox="0 0 576 512">
                            <path fill="currentColor"
                                  d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                            </path>
                        </svg>

                        <svg class="h-6 text-gray-700" width="16" height="16" fill="none" @click="show = !show"
                             :class="{'block': !show, 'hidden':show }" xmlns="http://www.w3.org/2000/svg"
                             viewbox="0 0 640 512">
                            <path fill="currentColor"
                                  d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
                            </path>
                        </svg>
                    </div>
                    <input placeholder="MẬT KHẨU" :type="show ? 'password' : 'text'"
                           name="password"
                           id="password"
                           autocomplete="current-password"
                           class="text-xs block mt-1 square-md w-full shadow-sm  border-gray-300 focus:placeholder-gray-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:border-indigo-300">
                </div>
            </div>
            <div class="sm">
                <button class="h-10 mt-3 text-base font-semibold
                    bg-gray-800 w-full text-white square-lg
                    px-3 block shadow-xl hover:text-white hover:bg-black">
                    {{ __('Log in') }}
                </button>
            </div>
            <div class="pb-1">
                <label class="block text-gray-500 font-bold my-4">
                    <input type="checkbox" class="w-5 h-5 rounded-full"
                           id="remember"
                           name="remember"
                           value=1
                           checked
                    />
                    <span class="ml-ml-2 text-small text-gray-600">{{ __('Remember me') }}</span>
                </label>
            </div>
            <hr>
        </form>
        <div class="flex justify-center">
            <label class="block items-center pl-3 text-gray-600 font-bold my-1"><a
                    href="{{ route('password.request') }}"
                    class="cursor-pointer text-small tracking-tighter text-black border-gray-200 hover:border-gray-400">
                    <span>{{ __('Forgot your password?') }}</span></a>
            </label>
            <div x-data="{ showModal : false }">
                <label class="block items-center pl-3 text-gray-600 font-bold my-1"><a
                        href="javascript:void(0)"
                        @click="showModal = !showModal"
                        class="cursor-pointer text-small tracking-tighter text-black border-gray-200 hover:border-gray-400">
                        <span>{{ __('Support') }}</span></a>
                </label>
                <div x-show="showModal" class="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0" x-transition:enter="transition ease duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
                    <div x-show="showModal" class="bg-white rounded-xl shadow-2xl p-6 sm:w-10/12 mx-10" @click.away="showModal = false" x-transition:enter="transition ease duration-100 transform" x-transition:enter-start="opacity-0 scale-90 translate-y-1" x-transition:enter-end="opacity-100 scale-100 translate-y-0" x-transition:leave="transition ease duration-100 transform" x-transition:leave-start="opacity-100 scale-100 translate-y-0" x-transition:leave-end="opacity-0 scale-90 translate-y-1">
                        <span class="font-bold block text-2xl mb-3">Nội dung hỗ trợ</span>
                        <p class="mb-5">Vui lòng gửi mail về <a href="mailto:tdgs.bcntt@gmail.com">tdgs.bcntt@gmail.com</a> để được hỗ trợ</p>
                        <div class="text-right space-x-5 mt-5">
                            <button @click="showModal = !showModal" class="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </x-auth-card>
</x-guest-layout>
